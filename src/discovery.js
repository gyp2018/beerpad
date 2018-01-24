import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Form from './components/Form';

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
    <hr />
    <div className="my-5">
      <h2>Suggest</h2>
      <div>
        <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
      </div>
    </div>
    <hr />
    <div className="my-5">
      <h2>Rating</h2>
      <div>
        No initial value: <Rating />
      </div>
      <div>
        Initial value 4: <Rating defaultValue={4} />
      </div>
      <div>
        Max value 10: <Rating max={10} />
      </div>
      <div>
        Read-only: <Rating readonly={true} defaultValue={3} />
      </div>
    </div>
    <hr />
    <div className="my-5">
      <h2>FormInput</h2>
      <tabel>
        <tbody>
          <tr>
            <td>Vanilla input</td>
            <td>
              <FormInput />
            </td>
          </tr>
          <tr>
            <td>Prefilled</td>
            <td>
              <FormInput defaultValue="it's like a default" />
            </td>
          </tr>
          <tr>
            <td>Year</td>
            <td>
              <FormInput type="year" />
            </td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <FormInput type="rating" defaultValue={4} />
            </td>
          </tr>
          <tr>
            <td>Suggest</td>
            <td>
              <FormInput
                type="suggest"
                options={['red', 'green', 'blue']}
                defaultValue="green"
              />
            </td>
          </tr>
          <tr>
            <td>Vanilla textarea</td>
            <td>
              <FormInput type="text" />
            </td>
          </tr>
        </tbody>
      </tabel>
    </div>
    <div className="my-5">
      <h2>Form</h2>
      <div>
        <Form
          fields={[
            { label: 'Rating', type: 'rating', id: 'rateme' },
            { label: 'Greetings', id: 'freetext' },
          ]}
          initialData={
            { rateme: 4, freetext: 'Hello' }
          }
        />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
