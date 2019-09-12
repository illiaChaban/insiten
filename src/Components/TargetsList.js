import React from 'react';


const TargetsList = ({targets, handleDelete, addingNew}) => (
  <div className='col space-between min-space-between-v'>
    {addingNew && <NewTarget/>}
    {targets.map( target => (
      <Target 
        data={target} 
        handleDelete={handleDelete}
        key={target.companyInfo.name}/>
    ))}
  </div>
);

const TargetActions = ({data, handleDelete}) => (
  <div className='row space-between actions'>
    <button className='btn' onClick={()=>handleDelete(data)}>Delete</button>
    <button className='btn'>Edit</button>
  </div>
);

const Contacts = ({keyContacts}) => {
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

const Input = ({name, value, handler}) => (
  <div>
    <label>
      {name}:
      <input type='text' onChange={handler} value={value}></input>
    </label>
  </div>
);

const SmallBtn = ({name, handler}) => (
  <button className='btn btn-small' onClick={handler}>{name}</button>
);


function NewTarget({handleSave, handleCancel}) {
  return (
    <div className='target-container'>
      <div className='row space-between'>
        <Input name='Name'/>
        <Input name='Status'/>
      </div>

      <SmallBtn name="save" handler={handleSave}/>
      <SmallBtn name="cancel" handler={handleCancel}/>

    </div>
  );
};

function Target(props) {
  const {companyInfo, keyContacts, financialPerformance, status} = props.data;
  const {name, industry, description, marketCapitalization, stockPrice} = companyInfo;

  return (
    <div className='target-container'>
      <div className='row space-between'>
        <div className='name'>{name}</div>
        <TargetActions {...props}/>
      </div>
      <div className='status'>
        <span>Status: {status}</span>
        {/* <span> | </span>
        <span>Performance: {financialPerformance}</span> */}
      </div>
      <div className='info'>
        {/* <div>Industry: {industry}</div>
        <div>Market Capitalization: {marketCapitalization}</div>
        <div>Stock Price: {stockPrice}</div> */}
        <div className='row space-between'>
          <ul>
            <li>Industry: {industry}</li>
            <li>Market Capitalization: {marketCapitalization}</li>
            <li>Stock Price: {stockPrice}</li>
            <li>Performance: {financialPerformance}</li>
          </ul>

          <Contacts keyContacts={keyContacts}/>
        </div>
        <p>Description: {description}</p>
      </div>
      
    </div>
  );
};


export default TargetsList;