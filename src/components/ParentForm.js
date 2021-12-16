import React, { Component } from 'react';
import General from './General';
import Education from './Education';

class ParentForm extends Component {
  render() {
    return (
      <form className='parentForm'>
        <General />
        <Education />
      </form>
    );
  }
}

export default ParentForm;
