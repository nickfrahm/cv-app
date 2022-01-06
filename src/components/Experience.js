import React, { Component } from 'react';
import ExperienceInfo from './ExperienceInfo.js';
import AddBtn from './AddBtn.js';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expItems, handleExpInput, handleAddExp, handleDelExp } = this.props;

    return (
      <div className='section experience'>
        <h2 className='sectionHeader'>Experience</h2>
        {expItems.map((exp) => {
          return (
            <ExperienceInfo
              key={exp.id}
              id={exp.id}
              company={exp.company}
              jobTitle={exp.jobTitle}
              city={exp.city}
              from={exp.from}
              to={exp.to}
              isPresent={exp.isPresent}
              handleExpInput={handleExpInput}
              handleDelExp={handleDelExp}
            />
          );
        })}
        <AddBtn type='exp' handleAddExp={handleAddExp} />
      </div>
    );
  }
}

export default Experience;
