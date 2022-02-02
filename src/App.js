import React, { useState } from 'react';
import DisplayButton from './components/DisplayButton.js';
import Header from './components/Header.js';
import ParentForm from './components/ParentForm.js';
import Preview from './components/Preview.js';
import uniqid from 'uniqid';
import './styles/App.css';

const App = () => {
  const [viewType, setViewType] = useState('edit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eduItems, setEduItems] = useState([
    {
      id: uniqid(),
      school: '',
      degreeType: '',
      major: '',
      from: '',
      to: '',
      isPresent: false,
      toType: 'date',
    },
  ]);
  const [expItems, setExpItems] = useState([
    {
      id: uniqid(),
      company: '',
      jobTitle: '',
      city: '',
      from: '',
      to: '',
      isPresent: false,
      toType: 'date',
    },
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    /*this.setState({
      ...this.state,
      [name]: value,
    });*/
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
    }
  };

  const handleEduInput = (e) => {
    const { name, value, id } = e.target;
    /*this.setState({
      ...this.state,
      eduItems: this.state.eduItems.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      ),
    });*/

    setEduItems(
      eduItems.map((el) => (el.id === id ? { ...el, [name]: value } : el))
    );
  };

  const handleAddEdu = (e) => {
    e.preventDefault();
    /*this.setState({
      ...this.state,
      eduItems: [
        ...this.state.eduItems,
        {
          id: uniqid(),
          school: '',
          degreeType: '',
          major: '',
          from: '',
          to: '',
          isPresent: false,
        },
      ],
    });*/

    setEduItems([
      ...eduItems,
      {
        id: uniqid(),
        school: '',
        degreeType: '',
        major: '',
        from: '',
        to: '',
        isPresent: false,
      },
    ]);
  };

  const handleDelEdu = (e) => {
    e.preventDefault();
    const { id } = e.target;
    /*this.setState({
      ...this.state,
      eduItems: this.state.eduItems.filter((el) => el.id !== id),
    });*/

    setEduItems(eduItems.filter((el) => el.id !== id));
  };

  const handleExpInput = (e) => {
    const { name, value, id } = e.target;
    /*this.setState({
      ...this.state,
      expItems: this.state.expItems.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      ),
    });*/

    setExpItems(
      expItems.map((el) => (el.id === id ? { ...el, [name]: value } : el))
    );
  };

  const handleAddExp = (e) => {
    e.preventDefault();
    /*this.setState({
      ...this.state,
      expItems: [
        ...this.state.expItems,
        {
          id: uniqid(),
          company: '',
          jobTitle: '',
          city: '',
          from: '',
          to: '',
          isPresent: false,
        },
      ],
    });*/

    setExpItems([
      ...expItems,
      {
        id: uniqid(),
        company: '',
        jobTitle: '',
        city: '',
        from: '',
        to: '',
        isPresent: false,
      },
    ]);
  };

  const handleDelExp = (e) => {
    e.preventDefault();
    const { id } = e.target;
    /*this.setState({
      ...this.state,
      expItems: this.state.expItems.filter((el) => el.id !== id),
    });*/

    setExpItems(expItems.filter((el) => el.id !== id));
  };

  const handleClickView = (e) => {
    e.preventDefault();

    if (viewType === 'edit') {
      //this.setState({ ...this.state, viewType: 'preview' });
      setViewType('preview');
    } else {
      //this.setState({ ...this.state, viewType: 'edit' });
      setViewType('edit');
    }
  };

  const handleIsPresentExp = (e) => {
    const { id } = e.target;

    if (
      //this.state.expItems.filter((exp) => exp.id === id)[0].isPresent === false
      expItems.filter((exp) => exp.id === id)[0].isPresent === false
    ) {
      /*this.setState({
        ...this.state,
        expItems: this.state.expItems.map((el) =>
          el.id === id
            ? { ...el, to: 'Current', toType: 'text', isPresent: true }
            : el
        ),
      });*/
      setExpItems(
        expItems.map((el) =>
          el.id === id
            ? { ...el, to: 'Current', toType: 'text', isPresent: true }
            : el
        )
      );
    } else {
      /*this.setState({
        ...this.state,
        expItems: this.state.expItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        ),
      });*/
      setExpItems(
        expItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        )
      );
    }
  };

  const handleIsPresentEdu = (e) => {
    const { id } = e.target;

    if (eduItems.filter((edu) => edu.id === id)[0].isPresent === false) {
      setEduItems(
        eduItems.map((el) =>
          el.id === id
            ? { ...el, to: 'Current', toType: 'text', isPresent: true }
            : el
        )
      );
    } else {
      /*this.setState({
        ...this.state,
        eduItems: this.state.eduItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        ),
      });*/
      setEduItems([
        eduItems.map((el) =>
          el.id === id
            ? { ...el, to: '', toType: 'date', isPresent: false }
            : el
        ),
      ]);
    }
  };

  return (
    <div className='App'>
      <Header />

      <DisplayButton handleClickView={handleClickView} type={viewType} />

      {viewType === 'edit' ? (
        <ParentForm
          handleInput={handleInput}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          eduItems={eduItems}
          expItems={expItems}
          handleEduInput={handleEduInput}
          handleAddEdu={handleAddEdu}
          handleDelEdu={handleDelEdu}
          handleExpInput={handleExpInput}
          handleAddExp={handleAddExp}
          handleDelExp={handleDelExp}
          handleIsPresentExp={handleIsPresentExp}
          handleIsPresentEdu={handleIsPresentEdu}
        />
      ) : (
        <Preview
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          expItems={expItems}
          eduItems={eduItems}
        />
      )}
    </div>
  );
};

export default App;
