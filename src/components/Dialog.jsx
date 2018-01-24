import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Dialog extends React.Component {
  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }

  componentDidMount() {
    if (this.props.modal) {
      document.body.classList.add('modal-open');
    }
  }

  render() {
    return (
      <div className={classNames({ 'modal': this.props.modal })} tabindex="-1" role="dialog">
        <div className={classNames({ 'modal-dialog': this.props.modal })} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.header}
              </h5>
            </div>
            <div className="modal-body">{this.props.children}</div>
            <div className="modal-footer">
              {this.props.hasCancel
                ? (
                  <span
                    className="btn btn-secondary"
                    onClick={this.props.onAction.bind(this, 'dismiss')}
                  >
                    Cancel
                  </span>
                ) : null
              }
              <button
                className="btn btn-primary"
                onClick={this.props.onAction.bind(this,
                  this.props.hasCancel ? 'confirm' : 'dismiss')
                }
              >
                {this.props.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  modal: PropTypes.bool,
  onAction: PropTypes.func,
  hasCancel: PropTypes.bool,
};

Dialog.defaultProps = {
  confirmLabel: 'ok',
  modal: false,
  onAction: () => {},
  hasCancel: true,
};

export default Dialog;
