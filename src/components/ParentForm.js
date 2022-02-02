import React from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

const ParentForm = (props) => {
  const {
    handleInput,
    name,
    email,
    phoneNumber,
    eduItems,
    expItems,
    handleEduInput,
    handleExpInput,
    handleAddEdu,
    handleDelEdu,
    handleAddExp,
    handleDelExp,
    handleIsPresentExp,
    handleIsPresentEdu,
  } = props;
  return (
    <form className='parentForm'>
      <General
        handleInput={handleInput}
        name={name}
        email={email}
        phoneNumber={phoneNumber}
      />
      <Education
        eduItems={eduItems}
        handleEduInput={handleEduInput}
        handleAddEdu={handleAddEdu}
        handleDelEdu={handleDelEdu}
        handleIsPresentEdu={handleIsPresentEdu}
      />
      <Experience
        expItems={expItems}
        handleExpInput={handleExpInput}
        handleAddExp={handleAddExp}
        handleDelExp={handleDelExp}
        handleIsPresentExp={handleIsPresentExp}
      />
    </form>
  );
};

export default ParentForm;
