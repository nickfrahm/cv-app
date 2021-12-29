import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, phoneNumber } = this.props;

    return (
      <div className='preview'>
        <p>
          {name} | {email} | {phoneNumber}
        </p>
      </div>
    );
  }
}

export default Preview;
