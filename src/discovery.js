/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Form from './components/Form';
import Action from './components/Actions';
import Dialog from './components/Dialog';

ReactDOM.render(
  <div className="container">
    <div className="jumbotron">
      Discovery
    </div>
    <div className="my-5">
      <h2>Button</h2>
      <div>
        Button with onClick: <Button onClick={() => console.log('ouch')}>Click me</Button>
      </div>
      <div>
        A link: <Button href="http://reactjs.com" color="link">Follow me</Button>
      </div>
      <div>
        A link Success: <Button href="http://reactjs.com" color="success">Follow me</Button>
      </div>
      <div>
        Danger class name: <Button color="danger" outline>I do nothing</Button>
      </div>
      <div>
        Primary class name, size sm: <Button color="primary" size="sm">I do nothing</Button>
      </div>
    </div>
    <hr />
    <div className="my-5">
      <h2>Suggest</h2>
      <div>
        <Suggest id="suggestTest" options={['eenie', 'meenie', 'miney', 'mo']} />
      </div>
    </div>
    <hr />
    <div className="my-5">
      <h2>Rating</h2>
      <div>
        No initial value: <Rating id="noInitialRating" />
      </div>
      <div>
        Initial value 4: <Rating id="fourInitialRating" defaultValue={4} />
      </div>
      <div>
        Max value 10: <Rating id="tenMaxRating" max={10} />
      </div>
      <div>
        Read-only: <Rating id="readonlyRating" defaultValue={3} readonly />
      </div>
    </div>
    <hr />
    <div className="my-5">
      <h2>FormInput</h2>
      <table>
        <tbody>
          <tr>
            <td>Vanilla input</td>
            <td>
              <FormInput type="text" id="vanillaInput" />
            </td>
          </tr>
          <tr>
            <td>Prefilled</td>
            <td>
              <FormInput type="text" id="prefilledInput" defaultValue="it's like a default" />
            </td>
          </tr>
          <tr>
            <td>Year</td>
            <td>
              <FormInput type="year" id="yearInput" />
            </td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <FormInput type="rating" id="ratingInput" defaultValue={4} />
            </td>
          </tr>
          <tr>
            <td>Suggest</td>
            <td>
              <FormInput
                type="suggest"
                id="suggestInput"
                options={['red', 'green', 'blue']}
                defaultValue="green"
              />
            </td>
          </tr>
          <tr>
            <td>Vanilla textarea</td>
            <td>
              <FormInput type="textarea" id="textareaInput" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div className="my-5">
      <h2>Form</h2>
      <div>
        <Form
          fields={[
            { label: 'Rating', type: 'rating', id: 'rateme' },
            { label: 'Greetings', type: 'text', id: 'freetext' },
          ]}
          initialData={
            { rateme: 4, freetext: 'Hello' }
          }
        />
      </div>
      <div>
        <Form
          fields={[
            { label: 'Rating', type: 'rating', id: 'rateme' },
            { label: 'Greetings', type: 'textarea', id: 'freetext' },
          ]}
          initialData={
            { rateme: 4, freetext: 'Hello' }
          }
          readonly
        />
      </div>
    </div>
    <hr />
    <div>
      <h2>Action</h2>
      <div>
        <Action onAction={actionType => console.log(actionType)} />
      </div>
    </div>
    <hr />
    <div>
      <h2>Dialog</h2>
      <div>
        <Dialog
          header="Out-of-the-box example"
          onAction={type => console.log(type)}
        >
          Hello, dialog!
        </Dialog>
      </div>
      <div>
        <Dialog
          header="No cancel, custom button"
          hasCancel={false}
          confirmLabel="Whatever"
          onAction={type => console.log(type)}
        >
          Anything goes here, see:
          <Button>a button</Button>
        </Dialog>
      </div>
    </div>
  </div>,
  document.getElementById('root'),
);
