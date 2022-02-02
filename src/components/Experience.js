import React from 'react';
import ExperienceInfo from './ExperienceInfo.js';
import AddBtn from './AddBtn.js';

const Experience = (props) => {
  const {
    expItems,
    handleExpInput,
    handleAddExp,
    handleDelExp,
    handleIsPresentExp,
  } = props;

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
            toType={exp.toType}
            handleExpInput={handleExpInput}
            handleDelExp={handleDelExp}
            handleIsPresentExp={handleIsPresentExp}
          />
        );
      })}
      <AddBtn type='exp' handleAddExp={handleAddExp} />
    </div>
  );
};

export default Experience;
