import P from 'prop-types';
import React from 'react';
import './styles.css';
export const Button = ({ text, onClick, disabled = false }) => {
  <button className="button" disabled={disabled} onClick={onClick}>
    {text}
  </button>;
};
Button.defaultProps = {
  disabled: false,
};
Button.prototype = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
  disabled: P.bool,
};
