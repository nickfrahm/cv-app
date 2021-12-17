import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class ParentForm extends Component {
  render() {
    return (
      <form className='parentForm'>
        <General />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default ParentForm;
