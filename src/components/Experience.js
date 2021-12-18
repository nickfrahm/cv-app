import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className='section experience'>
        <h2 className='sectionHeader'>Experience</h2>
        <div className='inputs'>
          <label>
            Company:
            <input type='text' name='company' />
          </label>
          <label>
            Job Title:
            <input type='text' name='jobTitle' />
          </label>
          <label>
            City:
            <input type='text' name='city' />
          </label>
          <div className='experienceDates'>
            <label>
              From:
              <input type='date' name='from' />
            </label>
            <label>
              To:
              <input type='date' name='to' />
            </label>
            <label>
              Present:
              <input type='checkbox' name='present' />
            </label>
          </div>
        </div>
        <button id='addExperience' className='btn'>
          Add
        </button>
      </div>
    );
  }
}

export default Experience;
