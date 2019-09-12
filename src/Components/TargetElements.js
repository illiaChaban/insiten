import React from 'react';

export const Contacts = ({keyContacts}) => {
  if (!keyContacts.length) return null;
  return (
    <ul>
      Key contacts:
      {keyContacts.map( ([name, email]) => (
        <div key={name}>{name} - {email}</div>
      ))}
    </ul>
  );
};

export const Input = ({name, value, handler}) => (
  <div>
    <label>
      {name}:
      <input type='text' onChange={handler} value={value} data-name={name}></input>
    </label>
  </div>
);

export const SmallBtn = ({name, handler}) => (
  <button className='btn btn-small' onClick={handler}>{name}</button>
);
