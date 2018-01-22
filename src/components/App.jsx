import React from 'react';
import BeerCard from './beerCard/BeerCard';
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';
import Form from './Form';

const App = () => (
  <div className="container">
    <h1>Hello React!</h1>
    <BeerCard />
    <Button className="btn-primary">Click</Button>
    <Button href="https://bootstrap.com">Click</Button>
    <Suggest options={['hi', 'hello']} id="greeting" />
    <Rating id="greetingRating" />
    <Form
      fields={[
        { label: 'Rating', type: 'rating', id: 'rateme' },
        { label: 'Greeting', id: 'freetext' },
      ]}
      initialData={
        { rateme: 4, freetext: 'Hello' }
      }
    />
  </div>
);

export default App;
