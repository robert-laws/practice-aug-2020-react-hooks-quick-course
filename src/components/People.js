import React, { useState } from 'react';
import Person from './Person';
import PersonForm from './PersonForm';

const People = () => {
  const [people, setPeople] = useState([
    {
      firstName: 'bob',
      lastName: 'cobb',
    },
    {
      firstName: 'hal',
      lastName: 'hope',
    },
  ]);

  const addNewPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  return (
    <div>
      <ul>
        {people.map((person) => (
          <Person key={person.firstName} person={person} />
        ))}
      </ul>
      <hr />
      <PersonForm addNewPerson={addNewPerson} />
    </div>
  );
};

export default People;
