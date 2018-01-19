import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const cssclasses = classNames('btn', props.className);
  return props.href
    ? <a {...props} className={cssclasses}>link</a>
    : <button {...props} className={cssclasses}>button</button>;
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  href: '',
  className: '',
};

export default Button;
