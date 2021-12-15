import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <div className='general'>
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
    );
  }
}

export default General;
