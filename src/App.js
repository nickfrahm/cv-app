import React, { Component } from 'react';
import DisplayButton from './components/DisplayButton.js';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import Preview from './components/Preview.js';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'edit',
      name: '',
      email: '',
      phoneNumber: '',
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
      ...this.state,
      [name]: value,
    });
  }

  handleAddEdu(e) {
    //
  }

  handleAddExp(e) {}

  render() {
    const { name, email, phoneNumber } = this.state;

    return (
      <div className='App'>
        <Header />
        <Preview name={name} email={email} phoneNumber={phoneNumber} />
        <DisplayButton />
        <ParentForm handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
