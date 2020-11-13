import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';

CSSTransition.childContextTypes = {};

export default function Fader(props) {
  return (
    <CSSTransition
      defaultStyle={{ opacity: 0 }}
      enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
      leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
      activeStyle={{ opacity: 1 }}
      {...props}
    />
  );
}
