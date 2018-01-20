/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: props.defaultValue,
      tmpRating: props.defaultValue,
    };

    this.reset = this.reset.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setRating(nextProps.defaultValue);
  }

  setTemp(rating) {
    this.setState({
      tmpRating: rating,
    });
  }

  getValue() {
    return this.state.rating;
  }

  setRating(rating) {
    this.setState({
      tmpRating: rating,
      rating,
    });
  }

  reset() {
    this.setTemp(this.state.rating);
  }

  render() {
    const stars = [];
    for (let i = 1; i <= this.props.max; i++) {
      stars.push((
        <span
          className={i <= this.state.tmpRating ? 'RatingOn' : null}
          key={i}
          onClick={!this.props.readonly && this.setRating.bind(this, i)}
          onMouseOver={!this.props.readonly && this.setTemp.bind(this, i)}
          onFocus={() => {}}
          role="presentation"
        >
          &#9734;
        </span>
      ));
    }
    return (
      <div
        className={classNames({
          Rating: true,
          RatingReadOnly: this.props.readonly,
        })}
        onMouseOut={this.reset}
        onBlur={() => {}}
        roleß="presentation"
      >
        {stars}
        {this.props.readonly || !this.props.id
          ? null
          : (
            <input
              type="hidden"
              id={this.props.id}
              value={this.state.rating}
            />
          )
        }
      </div>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
  defaultValue: PropTypes.number,
  max: PropTypes.number,
};
Rating.defaultProps = {
  readonly: false,
  defaultValue: 0,
  max: 5,
};

export default Rating;
