import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {
  const outline = props.outline ? '-outline' : '';
  const color = props.color || 'dark';
  const size = props.size ? `btn-${props.size}` : null;
  const cssclasses = classnames('btn', `btn${outline}-${color}`, size);
  return props.href
    ? <a role="button" className={cssclasses} href={props.href}>{props.children}</a>
    : <button type="button" className={cssclasses}>{props.children}</button>;
};

Button.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  children: PropTypes.string.isRequired,
};

export default Button;
