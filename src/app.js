import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './app.less';

function App() {
  return (
    <div className="text">hello world</div>
  )
}
ReactDom.render(<App />, document.getElementById('mountNode'));