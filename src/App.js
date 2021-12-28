import React, { Component } from 'react';
import DisplayButton from './components/DisplayButton.js';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'edit',
      general: { name: '', email: '', phoneNum: '' },
      eduItems: [],
      expItems: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleAddExp = this.handleAddExp.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;

    this.setState({
      //general[name]: [value],
      ...this.state,
    });
  }

  handleAddEdu(e) {
    //
  }

  handleAddExp(e) {}

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
