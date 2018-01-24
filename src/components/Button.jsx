import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const cssclasses = classNames('btn', props.className ? `btn-${props.className}` : 'btn-light');
  return props.href
    ? <a {...props} className={cssclasses}>{props.children}</a>
    : <button {...props} className={cssclasses}>{props.children}</button>;
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
Button.defaultProps = {
  href: '',
  className: '',
};

export default Button;
