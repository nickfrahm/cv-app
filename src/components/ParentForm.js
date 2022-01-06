import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class ParentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      handleInput,
      name,
      email,
      phoneNumber,
      eduItems,
      expItems,
      handleEduInput,
      handleExpInput,
      handleAddEdu,
      handleDelEdu,
      handleAddExp,
      handleDelExp,
    } = this.props;
    return (
      <form className='parentForm'>
        <General
          handleInput={handleInput}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
        <Education
          eduItems={eduItems}
          handleEduInput={handleEduInput}
          handleAddEdu={handleAddEdu}
          handleDelEdu={handleDelEdu}
        />
        <Experience
          expItems={expItems}
          handleExpInput={handleExpInput}
          handleAddExp={handleAddExp}
          handleDelExp={handleDelExp}
        />
      </form>
    );
  }
}

export default ParentForm;
