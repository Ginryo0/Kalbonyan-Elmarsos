import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const cssClassess = [
    'Backdrop',
    props.show ? 'BackdropOpen' : 'BackdropClose',
  ];
  return <div className={cssClassess.join(' ')}></div>;
};
export default backdrop;
