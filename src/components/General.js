import React from 'react';

const General = (props) => {
  const { handleInput, name, email, phoneNumber } = props;

  return (
    <div className='section general'>
      <h2 className='sectionHeader'>General Info</h2>
      <div className='inputs'>
        <label>
          Name:
          <input type='text' name='name' onChange={handleInput} value={name} />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            onChange={handleInput}
            value={email}
          />
        </label>
        <label>
          Phone Number:
          <input
            type='text'
            name='phoneNumber'
            onChange={handleInput}
            value={phoneNumber}
          />
        </label>
      </div>
    </div>
  );
};

export default General;
