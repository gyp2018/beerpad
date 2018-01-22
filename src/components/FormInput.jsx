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

    if (this.props.type === 'year') {
      return (
        <input
          {...common}
          type="number"
          defaultValue={this.props.defaultValue || new Date().getFullYear()}
        />
      );
    } else if (this.props.type === 'suggest') {
      return (
        <Suggest
          {...common}
          options={this.props.options}
        />
      );
    } else if (this.props.type === 'rating') {
      return (
        <Rating
          {...common}
          defaultValue={parseInt(this.props.defaultValue, 10)}
        />
      );
    } else if (this.props.type === 'text') {
      return <textarea {...common} />;
    } else {
      return <input {...common} type="text" />;
    }
  }
}

FormInput.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
  ),
  options: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
};

export default FormInput;
