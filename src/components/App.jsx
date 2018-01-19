import React from 'react';
import BeerCard from './beerCard/BeerCard';
import Button from './Button';

const App = () => (
  <div className="container">
    <h1>Hello React!</h1>
    <BeerCard />
    <Button className="btn-primary">Click</Button>
    <Button href="https://bootstrap.com">Click</Button>
  </div>
);

export default App;
