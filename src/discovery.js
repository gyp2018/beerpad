import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';

ReactDOM.render(
  <div className="container">
    <div className="jumbotron">
      Discovery
    </div>
    <div className="my-5">
      <h2>Button</h2>
      <div>
        Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button>
      </div>
      <div>
        A link: <Button href="http://reactjs.com">Follow me</Button>
      </div>
      <div>
        Custom class name: <Button className="primary">I do nothing</Button>
      </div>
    </div>
    <div className="my-5">
      <h2>Suggest</h2>
      <div>
        <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
      </div>
    </div>
    <div className="my-5">
      <h2>Rating</h2>
      <div>
        No initial value: <Rating />
      </div>
      <div>
        Initial value 4: <Rating defaultValue="4" />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
