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
      toType,
      handleEduInput,
      handleDelEdu,
      handleIsPresentEdu,
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
              type={toType}
              name='to'
              onChange={handleEduInput}
              value={to}
              id={id}
            />
          </label>
          <label>
            Present:
            <input
              type='checkbox'
              name='present'
              checked={isPresent}
              id={id}
              onChange={handleIsPresentEdu}
            />
          </label>
        </div>
        <button
          id={id}
          className='btn deleteEducation del'
          onClick={handleDelEdu}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default EducationInfo;
