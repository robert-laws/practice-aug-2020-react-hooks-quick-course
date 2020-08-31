import React, { useState } from 'react';

const PersonForm = ({ addNewPerson }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.firstName === '' || name.lastName === '') {
      setErrorMessage(true);
    } else {
      addNewPerson(name);
      setErrorMessage(false);
      setName({
        firstName: '',
        lastName: '',
      });
    }
  };

  return (
    <div>
      <h2>Add Person</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='errorMessage'>
          {errorMessage ? 'add a name before submitting' : ''}
        </div>
        <div>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
            value={name.firstName}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
            value={name.lastName}
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
    </div>
  );
};

export default PersonForm;
