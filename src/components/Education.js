import React, { Component } from 'react';
import EducationInfo from './EducationInfo.js';
import AddBtn from './AddBtn.js';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eduItems, handleEduInput, handleAddEdu, handleDelEdu } = this.props;

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
              handleEduInput={handleEduInput}
              handleDelEdu={handleDelEdu}
            />
          );
        })}
        <AddBtn type='edu' handleAddEdu={handleAddEdu} />
      </div>
    );
  }
}

export default Education;
