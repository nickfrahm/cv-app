import React, { Component } from 'react';
import DisplayButton from './components/DisplayButton.js';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import Preview from './components/Preview.js';
import uniqid from 'uniqid';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'edit',
      name: '',
      email: '',
      phoneNumber: '',
      eduItems: [
        {
          id: uniqid(),
          school: '',
          degreeType: '',
          major: '',
          from: '',
          to: '',
          isPresent: false,
        },
      ],
      expItems: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleAddExp = this.handleAddExp.bind(this);
    this.handleClickView = this.handleClickView.bind(this);
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

  handleClickView(e) {
    e.preventDefault();

    if (this.state.viewType === 'edit') {
      this.setState({ ...this.state, viewType: 'preview' });
    } else {
      this.setState({ ...this.state, viewType: 'edit' });
    }
  }

  render() {
    const { name, email, phoneNumber, viewType, eduItems } = this.state;

    return (
      <div className='App'>
        <Header />

        <DisplayButton handleClickView={this.handleClickView} type={viewType} />

        {viewType === 'edit' ? (
          <ParentForm
            handleInput={this.handleInput}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            eduItems={eduItems}
          />
        ) : (
          <Preview name={name} email={email} phoneNumber={phoneNumber} />
        )}
      </div>
    );
  }
}

export default App;
