import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className='section education'>
        <h2 className='sectionHeader'>Education</h2>
        <div className='inputs'>
          <label>
            School:
            <input type='text' name='school' />
          </label>
          <label>
            Degree Type:
            <input type='text' name='degree' />
          </label>
          <label>
            Major:
            <input type='text' name='major' />
          </label>
          <div className='educationDates'>
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
      </div>
    );
  }
}

export default Education;
