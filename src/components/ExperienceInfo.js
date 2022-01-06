import React, { Component } from 'react';

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      company,
      jobTitle,
      city,
      from,
      to,
      isPresent,
      handleExpInput,
      handleDelExp,
    } = this.props;
    return (
      <div className='inputs'>
        <label>
          Company:
          <input
            id={id}
            type='text'
            name='company'
            onChange={handleExpInput}
            value={company}
          />
        </label>
        <label>
          Job Title:
          <input
            id={id}
            type='text'
            name='jobTitle'
            onChange={handleExpInput}
            value={jobTitle}
          />
        </label>
        <label>
          City:
          <input
            id={id}
            type='text'
            name='city'
            onChange={handleExpInput}
            value={city}
          />
        </label>
        <div className='educationDates'>
          <label>
            From:
            <input
              id={id}
              type='date'
              name='from'
              onChange={handleExpInput}
              value={from}
            />
          </label>
          <label>
            To:
            <input
              type='date'
              name='to'
              onChange={handleExpInput}
              value={to}
              id={id}
            />
          </label>
          <label>
            Present:
            <input type='checkbox' name='present' value={isPresent} id={id} />
          </label>
        </div>
        <button
          id={id}
          className='btn deleteExperience del'
          onClick={handleDelExp}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ExperienceInfo;
