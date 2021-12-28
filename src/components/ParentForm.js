import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class ParentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className='parentForm'>
        <General handleInput={this.props.handleInput} />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default ParentForm;
