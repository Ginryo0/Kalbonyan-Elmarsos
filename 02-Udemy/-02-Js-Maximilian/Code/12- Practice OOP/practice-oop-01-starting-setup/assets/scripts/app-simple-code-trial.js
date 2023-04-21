const elStatus = [
  ['active', 'Activate'],
  ['finished', 'Finish'],
];

function Alternate(idx) {
  let oidx = idx == 0 ? 1 : 0;
  console.log(
    document.querySelector(`#${elStatus[idx][0]}-projects`).firstElementChild
  );
  document
    .querySelector(`#${elStatus[idx][0]}-projects`)
    .addEventListener('click', (e) => {
      if (e.target.textContent == elStatus[oidx][1]) {
        let node = e.target.parentNode.cloneNode(true);
        e.target.parentNode.remove();
        node.querySelector('button:last-of-type').textContent =
          elStatus[idx][1];
        document
          .querySelector(`#${elStatus[oidx][0]}-projects ul`)
          .insertAdjacentElement('afterbegin', node);
      }
    });
}

Alternate(0);
Alternate(1);
