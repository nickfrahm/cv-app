import React, { Component } from 'react';

const DisplayButton = (props) => {
  const { handleClickView, type } = props;
  return (
    <div className='displayType'>
      <button className='btn editForm' onClick={handleClickView}>
        {type === 'edit' ? 'Preview' : 'Edit'}
      </button>
    </div>
  );
};

export default DisplayButton;
