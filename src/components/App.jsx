import React from 'react';
import BeerCard from './beerCard/BeerCard';
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';

const App = () => (
  <div className="container">
    <h1>Hello React!</h1>
    <BeerCard />
    <Button className="btn-primary">Click</Button>
    <Button href="https://bootstrap.com">Click</Button>
    <Suggest options={['hi', 'hello']} id="greeting" />
    <Rating id="greetingRating" />
  </div>
);

export default App;
