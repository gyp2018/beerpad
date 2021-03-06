import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Suggest from './Suggest';

class FormInput extends React.Component {
  getValue() {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const common = {
      id: this.props.id,
      ref: 'input',
      defaultValue: this.props.defaultValue,
    };

    switch (this.props.type) {
      case 'year':
        return (
          <input
            {...common}
            className="form-control"
            type="number"
            defaultValue={this.props.defaultValue || new Date().getFullYear()}
          />
        );
      case 'suggest':
        return (
          <Suggest
            {...common}
            options={this.props.options}
          />
        );
      case 'rating':
        return (
          <Rating
            {...common}
            defaultValue={parseInt(this.props.defaultValue, 10)}
          />
        );
      case 'textarea':
        return <textarea {...common} className="form-control" />;
      default:
        return <input {...common} className="form-control" type="text" />;
    }
  }
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
};

export default FormInput;
