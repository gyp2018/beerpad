import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import Rating from './Rating';

class Form extends React.Component {
  getValue() {
    const data = {};
    this.props.fields.forEach((field) => {
      data[field.id] = this.refs[field.id].getValue();
    });
    return data;
  }

  render() {
    return (
      <form>
        {this.props.fields.map((field) => {
          const prefilled = this.props.initialData
            && this.props.initialData[field.id];
          if (!this.props.readonly) {
            return (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id}>
                  {field.label}:
                </label>
                <FormInput
                  {...field}
                  ref={field.id}
                  defaultValue={prefilled}
                />
              </div>
            );
          }
          if (!prefilled) {
            return null;
          }
          return (
            <div className="form-group" key={field.id}>
              <label htmlFor={field.id}>
                {field.label}:
              </label>
              {field.type === 'rating'
                ? (
                  <Rating
                    id={field.id}
                    readonly
                    defaultValue={parseInt(prefilled, 10)}
                  />
                  )
                : <div>{prefilled}</div>
              }
            </div>
          );
        })}
      </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
};

export default Form;
