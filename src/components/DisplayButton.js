import React, { Component } from 'react';

class DisplayButton extends Component {
  render() {
    return (
      <div className='displayType'>
        <button className='btn editForm'>Edit</button>
        <p>or</p>
        <button className='btn previewCV'>Preview</button>
      </div>
    );
  }
}

export default DisplayButton;
