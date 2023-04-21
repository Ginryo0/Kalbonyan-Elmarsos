class DOMHelper {
  static clearEventListener(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach() {
    this.element.remove();
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierHandlerFn) {
    // super('active-projects', true);
    super(); // no args -> = after body
    this.closeNotifier = closeNotifierHandlerFn; // function -> to change active tooltip
    this.create();
  }

  closeTooltip = () => {
    // arrow -> no need to bind
    this.detach();
    this.closeNotifier(); // sets has active tooltip to false
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'Dummy';
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(projectId, updateProjectsListFunction, type) {
    this.id = projectId;
    this.updateProjectsListHandler = updateProjectsListFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const tooltip = new Tooltip(() => (this.hasActiveTooltip = false));
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoBtn() {
    const projectItemEl = document.querySelector(`#${this.id}`); //  = get element by id
    const moreInfoBtn = projectItemEl.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  connectSwitchBtn(type) {
    const projectItemEl = document.querySelector(`#${this.id}`); //  = get element by id
    let switchBtn = projectItemEl.querySelector(`button:last-of-type`);
    switchBtn = DOMHelper.clearEventListener(switchBtn); // always clear event listener - store the new clone
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectsListHandler.bind(null, this.id) // you have to pass the Id here to addProject
    );
  }
  update(updateProjectsListFn, type) {
    this.updateProjectsListHandler = updateProjectsListFn;
    this.connectSwitchBtn(type); // adding new Event - you have to clear the old one first
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    // this.switchHander = switchHandlerFunction; -> can't be set here because you need both lists  to be created
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type) // make sure function is bound
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHander = switchHandlerFunction;
  }

  addProject(project) {
    console.log(this);
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`); // send to act/fns projects list
    project.update(this.switchProject.bind(this), this.type); // you have to pass the new switch method + new type
  }

  switchProject(projectId) {
    // removing from current list
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHander(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList) // callback =  binding it to the other list to get called on
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
