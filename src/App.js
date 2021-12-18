import React, { Component } from 'react';
import DisplayButton from './components/DisplayButton.js';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <DisplayButton />
        <ParentForm />
      </div>
    );
  }
}

export default App;
