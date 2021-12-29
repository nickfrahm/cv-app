import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class ParentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleInput, name, email, phoneNumber } = this.props;
    return (
      <form className='parentForm'>
        <General
          handleInput={this.props.handleInput}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default ParentForm;
