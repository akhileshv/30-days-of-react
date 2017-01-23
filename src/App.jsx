import React, { Component } from 'react';
import Header from './Header/index.jsx';
import Content from './Content/index.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}


export default App;
