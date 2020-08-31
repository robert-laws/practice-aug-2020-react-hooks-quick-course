import React from 'react';

const Person = ({ person: { firstName, lastName } }) => {
  return (
    <li>
      {firstName} {lastName}
    </li>
  );
};

export default Person;
