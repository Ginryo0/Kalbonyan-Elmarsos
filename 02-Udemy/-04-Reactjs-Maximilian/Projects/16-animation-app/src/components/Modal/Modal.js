import React from 'react';
import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTimings = {
  enter: 400,
  exit: 1000,
};
// on enter/exit - ing - ed -> to stagger animations -> like follow each other

{
  /* <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTimings}
      onEnter={() => console.log('onEnter - before entering')}
      onEntering={() => console.log('onEntering - entering')}
      onEntered={() => console.log('onEntered - after entering')}
      onExit={() => console.log('onExit - before exiting')}
      onExiting={() => console.log('onExiting - exiting')}
      onExited={() => console.log('onExited - after exiting')}
    >
      {(state) => {
        const cssClassess = [
          'Modal',
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting'
            ? 'ModalClose'
            : null,
        ];
        return (
          <div className={cssClassess.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition> */
}

//CSS transition -> classNames -> class-enter, class-enter-active, -exit, -exit-active ->  classNames="fade-slide" -> 'fade-slide-enter-active' ....etc

//ClassNames obj = same as before + appear/appearActive -> when loading DOM for 1st time -> for elements that appear on DOM load not afte clicking a btn
const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTimings}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose',
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
