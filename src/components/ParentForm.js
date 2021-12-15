import React, { Component } from 'react';
import General from './General';

class ParentForm extends Component {
  render() {
    return (
      <form className='parentForm'>
        <General />
      </form>
    );
  }
}

export default ParentForm;
