import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, phoneNumber, expItems, eduItems } = this.props;

    return (
      <div className='preview'>
        <h2>
          {name} | {email} | {phoneNumber}
        </h2>
        <h3>Work Experience</h3>
        <div>
          {expItems.map((exp) => {
            return (
              <div>
                <h4>{exp.jobTitle}</h4>
                <p>
                  {exp.company}, {exp.city}
                </p>
                <p>
                  {exp.from} - {exp.to}
                </p>
              </div>
            );
          })}
        </div>
        <h3>Education</h3>
        <div>
          {eduItems.map((edu) => {
            return (
              <div>
                <h4>{edu.school}</h4>
                <p>
                  {edu.major}, {edu.degreeType}
                </p>
                <p>
                  {edu.from} - {edu.to}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
