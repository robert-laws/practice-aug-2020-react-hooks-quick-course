import React, { useEffect } from 'react';

const NewestPerson = ({ newPerson }) => {
  useEffect(() => {
    if (newPerson.firstName.length > 5) {
      document.querySelector('#new-person').classList.add('green');
      document.querySelector('#new-person').classList.remove('red');
    } else {
      document.querySelector('#new-person').classList.add('red');
      document.querySelector('#new-person').classList.remove('green');
    }

    return () => {
      console.log('unmount...');
    };
  }, [newPerson]);

  return (
    <div id='new-person'>
      {newPerson.firstName} {newPerson.lastName}
    </div>
  );
};

export default NewestPerson;
