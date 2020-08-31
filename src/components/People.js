import React, { useState } from 'react';
import Person from './Person';
import PersonForm from './PersonForm';
import NewestPerson from './NewestPerson';

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
      <hr />
      <NewestPerson newPerson={people[people.length - 1]} />
    </div>
  );
};

export default People;
