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
          toType: 'date',
        },
      ],
      expItems: [
        {
          id: uniqid(),
          company: '',
          jobTitle: '',
          city: '',
          from: '',
          to: '',
          isPresent: false,
          toType: 'date',
        },
      ],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleAddExp = this.handleAddExp.bind(this);
    this.handleClickView = this.handleClickView.bind(this);
    this.handleEduInput = this.handleEduInput.bind(this);
    this.handleDelEdu = this.handleDelEdu.bind(this);
    this.handleExpInput = this.handleExpInput.bind(this);
    this.handleDelExp = this.handleDelExp.bind(this);
    this.handleIsPresentExp = this.handleIsPresentExp.bind(this);
    this.handleIsPresentEdu = this.handleIsPresentEdu.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleEduInput(e) {
    const { name, value, id } = e.target;
    this.setState({
      ...this.state,
      eduItems: this.state.eduItems.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      ),
    });
  }

  handleAddEdu(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      eduItems: [
        ...this.state.eduItems,
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
    });
  }

  handleDelEdu(e) {
    e.preventDefault();
    const { id } = e.target;
    this.setState({
      ...this.state,
      eduItems: this.state.eduItems.filter((el) => el.id !== id),
    });
  }

  handleExpInput(e) {
    const { name, value, id } = e.target;
    this.setState({
      ...this.state,
      expItems: this.state.expItems.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      ),
    });
  }

  handleAddExp(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      expItems: [
        ...this.state.expItems,
        {
          id: uniqid(),
          company: '',
          jobTitle: '',
          city: '',
          from: '',
          to: '',
          isPresent: false,
        },
      ],
    });
  }

  handleDelExp(e) {
    e.preventDefault();
    const { id } = e.target;
    this.setState({
      ...this.state,
      expItems: this.state.expItems.filter((el) => el.id !== id),
    });
  }

  handleClickView(e) {
    e.preventDefault();

    if (this.state.viewType === 'edit') {
      this.setState({ ...this.state, viewType: 'preview' });
    } else {
      this.setState({ ...this.state, viewType: 'edit' });
    }
  }

  handleIsPresentExp(e) {
    const { id } = e.target;

    if (
      this.state.expItems.filter((exp) => exp.id === id)[0].isPresent === false
    ) {
      this.setState({
        ...this.state,
        expItems: this.state.expItems.map((el) =>
          el.id === id
            ? { ...el, to: 'Current', toType: 'text', isPresent: true }
            : el
        ),
      });
    } else {
      this.setState({
        ...this.state,
        expItems: this.state.expItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        ),
      });
    }
  }

  handleIsPresentEdu(e) {
    const { id } = e.target;

    if (
      this.state.eduItems.filter((edu) => edu.id === id)[0].isPresent === false
    ) {
      this.setState({
        ...this.state,
        eduItems: this.state.eduItems.map((el) =>
          el.id === id
            ? { ...el, to: 'Current', toType: 'text', isPresent: true }
            : el
        ),
      });
    } else {
      this.setState({
        ...this.state,
        eduItems: this.state.eduItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        ),
      });
    }
  }

  render() {
    const { name, email, phoneNumber, viewType, eduItems, expItems } =
      this.state;

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
            expItems={expItems}
            handleEduInput={this.handleEduInput}
            handleAddEdu={this.handleAddEdu}
            handleDelEdu={this.handleDelEdu}
            handleExpInput={this.handleExpInput}
            handleAddExp={this.handleAddExp}
            handleDelExp={this.handleDelExp}
            handleIsPresentExp={this.handleIsPresentExp}
            handleIsPresentEdu={this.handleIsPresentEdu}
          />
        ) : (
          <Preview
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            expItems={expItems}
            eduItems={eduItems}
          />
        )}
      </div>
    );
  }
}

export default App;
