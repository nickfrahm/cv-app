import React, { Component } from 'react';

const AddBtn = (props) => {
  const { type, handleAddEdu, handleAddExp } = props;

  return (
    <button
      className='add btn'
      onClick={type === 'edu' ? handleAddEdu : handleAddExp}
    >
      Add
    </button>
  );
};

export default AddBtn;
