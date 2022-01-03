import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class ParentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleInput, name, email, phoneNumber, eduItems, handleEduInput } =
      this.props;
    return (
      <form className='parentForm'>
        <General
          handleInput={handleInput}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
        <Education eduItems={eduItems} handleEduInput={handleEduInput} />
        <Experience />
      </form>
    );
  }
}

export default ParentForm;
