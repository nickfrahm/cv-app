import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInput } = this.props;

    return (
      <div className='section general'>
        <h2 className='sectionHeader'>General Info</h2>
        <div className='inputs'>
          <label>
            Name:
            <input type='text' name='name' onChange={handleInput} />
          </label>
          <label>
            Email:
            <input type='text' name='email' onChange={handleInput} />
          </label>
          <label>
            Phone Number:
            <input type='text' name='phoneNumber' onChange={handleInput} />
          </label>
        </div>
      </div>
    );
  }
}

export default General;
