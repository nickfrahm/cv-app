import React from 'react';
import EducationInfo from './EducationInfo.js';
import AddBtn from './AddBtn.js';

const Education = (props) => {
  const {
    eduItems,
    handleEduInput,
    handleAddEdu,
    handleDelEdu,
    handleIsPresentEdu,
  } = props;

  return (
    <div className='section education'>
      <h2 className='sectionHeader'>Education</h2>
      {eduItems.map((edu) => {
        return (
          <EducationInfo
            key={edu.id}
            id={edu.id}
            school={edu.school}
            degreeType={edu.degreeType}
            major={edu.major}
            from={edu.from}
            to={edu.to}
            isPresent={edu.isPresent}
            toType={edu.toType}
            handleEduInput={handleEduInput}
            handleDelEdu={handleDelEdu}
            handleIsPresentEdu={handleIsPresentEdu}
          />
        );
      })}
      <AddBtn type='edu' handleAddEdu={handleAddEdu} />
    </div>
  );
};

export default Education;
