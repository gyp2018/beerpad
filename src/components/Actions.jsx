import React from 'react';
import PropTypes from 'prop-types';

const Actions = props =>
  <div className="Actions">
    <span
      className="fa-stack fa-lg"
      tabIndex="0"
      title="More info"
      onClick={props.onAction.bind(null, 'info')}
    >
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-info fa-stack-1x fa-inverse"></i>
    </span>
    <span
      className="fa-stack fa-lg"
      tabIndex="0"
      title="Edit"
      onClick={props.onAction.bind(null, 'edit')}
    >
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
    </span>
    <span
      className="fa-stack fa-lg"
      tabIndex="0"
      title="Delete"
      onClick={props.onAction.bind(null, 'delete')}
    >
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-times fa-stack-1x fa-inverse"></i>
    </span>
  </div>

Actions.propTypes = {
  onAction: PropTypes.func,
};
Actions.defaultProps = {
  onAction: () => {},
};

export default Actions;
