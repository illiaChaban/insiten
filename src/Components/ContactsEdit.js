import React from 'react';

const ContactsEdit = ({contacts, addContact, removeContact, handleChange}) => (
  <ul className='flex-grow-1'>
    Key contacts:
    {contacts.map( (contact,i) => {
      return (
        <div key={i} className='row'>
          <input 
            type='text' 
            value={contact}
            data-name='keyContacts'
            data-index={i}
            onChange={handleChange}
          ></input>
          <button 
            className='btn btn-xs remove'
            onClick={removeContact}
            data-name='keyContacts'
            data-index={i}
          ></button>
        </div>
      );
    })}
    <div>
      <button 
        className='btn btn-xs add'
        data-name='keyContacts'
        onClick={addContact}
      ></button>
    </div>
  </ul>
);

export default ContactsEdit;