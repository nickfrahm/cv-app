import React, { Component } from 'react';

class AddBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, handleAddEdu, handleAddExp } = this.props;

    return (
      <button
        className='add btn'
        onClick={type === 'edu' ? handleAddEdu : handleAddExp}
      >
        Add
      </button>
    );
  }
}

export default AddBtn;
