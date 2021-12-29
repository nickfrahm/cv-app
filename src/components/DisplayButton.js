import React, { Component } from 'react';

class DisplayButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClickView, type } = this.props;
    return (
      <div className='displayType'>
        <button className='btn editForm' onClick={handleClickView}>
          {type === 'edit' ? 'Preview' : 'Edit'}
        </button>
      </div>
    );
  }
}

export default DisplayButton;
