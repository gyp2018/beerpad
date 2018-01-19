import React from 'react';
import PropTypes from 'prop-types';

class BeerCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
  }

  render() {
    return (
      <div>
        <h1>BeerCard {this.state.name}</h1>
      </div>
    );
  }
}

BeerCard.propTypes = {
  name: PropTypes.string,
};
BeerCard.defaultProps = {
  name: 'Stranger',
};

export default BeerCard;
