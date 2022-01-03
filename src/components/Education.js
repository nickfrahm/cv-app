import React, { Component } from 'react';
import EducationInfo from './EducationInfo.js';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eduItems, handleEduInput } = this.props;

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
            />
          );
        })}
      </div>
    );
  }
}

export default Education;
