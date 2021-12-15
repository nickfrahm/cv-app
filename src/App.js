import React, { Component } from 'react';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ParentForm />
      </div>
    );
  }
}

export default App;
