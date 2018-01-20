/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';

class Suggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue,
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  getValue() {
    return this.state.value;
  }

  inputHandler(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const randomid = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          onChange={this.inputHandler}
          id={this.props.id}
        />
        <datalist id={randomid}>
          {this.props.options.map((item, idx) => (
            <option value={item} key={idx} />
          ))}
        </datalist>
      </div>
    );
  }
}

Suggest.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};
Suggest.defaultProps = {
  defaultValue: '',
};

export default Suggest;
