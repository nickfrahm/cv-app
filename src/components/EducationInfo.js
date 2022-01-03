import React, { Component } from 'react';

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      school,
      degreeType,
      major,
      from,
      to,
      isPresent,
      handleEduInput,
    } = this.props;
    return (
      <div className='inputs'>
        <label>
          School:
          <input
            id={id}
            type='text'
            name='school'
            onChange={handleEduInput}
            value={school}
          />
        </label>
        <label>
          Degree Type:
          <input
            id={id}
            type='text'
            name='degreeType'
            onChange={handleEduInput}
            value={degreeType}
          />
        </label>
        <label>
          Major:
          <input
            id={id}
            type='text'
            name='major'
            onChange={handleEduInput}
            value={major}
          />
        </label>
        <div className='educationDates'>
          <label>
            From:
            <input
              id={id}
              type='date'
              name='from'
              onChange={handleEduInput}
              value={from}
            />
          </label>
          <label>
            To:
            <input
              type='date'
              name='to'
              onChange={handleEduInput}
              value={to}
              id={id}
            />
          </label>
          <label>
            Present:
            <input type='checkbox' name='present' value={isPresent} id={id} />
          </label>
        </div>
        <button className='btn deleteEducation del'>Delete</button>
      </div>
    );
  }
}

export default EducationInfo;
