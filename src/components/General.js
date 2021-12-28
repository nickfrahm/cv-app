import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='section general'>
        <h2 className='sectionHeader'>General Info</h2>
        <div className='inputs'>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <label>
            Email:
            <input type='text' name='email' />
          </label>
          <label>
            Phone Number:
            <input type='text' name='phoneNumber' />
          </label>
        </div>
      </div>
    );
  }
}

export default General;
