import React from 'react';

export const Contacts = ({keyContacts}) => {
  if (!keyContacts.length) return null;
  return (
    <ul>
      Key contacts:
      {keyContacts.map( (contact,i) => (
        <div key={i}>{contact}</div>
      ))}
    </ul>
  );
};

const Label = ({label, name}) => {
  if (label === false) return null;
  return (
    <span className='margin-right-5'>{label || name}:</span>
  );
}

export const Input = ({name, label, value, handler}) => (
  <div>
    <label>
      <Label label={label} name={name}/>
      <input type='text' onChange={handler} value={value} data-name={name}></input>
    </label>
  </div>
);

export const Select = ({name, value, handler, options}) => (
  <div>
    <label>
      <Label name={name}/>
      <select type='text' onChange={handler} value={value} data-name={name}>
        {options.map( option => <option value={option} key={option}>{option}</option>)}
      </select>
    </label>
  </div>
);

export const Textarea = ({name, value, handler}) => (
  <div>
    <label>
      {/* {name}: */}
      <textarea 
        onChange={handler} 
        value={value} 
        data-name={name}
        placeholder={name + "..."}
      ></textarea>
    </label>
  </div>
);

export const SmallBtn = ({name, handler}) => (
  <button className='btn btn-small' onClick={handler}>{name}</button>
);
