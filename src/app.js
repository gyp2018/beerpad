/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

let data = JSON.parse(localStorage.getItem('data'));

if (!data) {
  data = {};
  schema.forEach((item) => { data[item.id] = item.sample; });
  data = [data];
}

ReactDOM.render(
  <div>
    <div className="app-header">
      Logo
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  document.getElementById('root'),
);
