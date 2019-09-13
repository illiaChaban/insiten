import React from 'react';
import {statuses} from './constants';

// function getAllStatuses() {
//   const { companies } = store.getState();
//   return companies.reduce( (statuses, {status}) => {
//     if (!statuses.includes(status)) statuses.push(status);
//     return statuses;
//   }, []);
// };

const SearchByStatus = ({value, handler}) => (
  <div className="flex flex-center-h flex-grow-1">
    <select value={value} onChange={handler}>
      <option value=''>Filter by status</option>
      {statuses.map( status => <option value={status} key={status}>{status}</option>)}
    </select>
  </div>
);

const SearchByName = ({value, handler}) => (
  <div className='flex-grow-1'>
    <input 
      type='text' 
      placeholder='Search by name...'
      value={value}
      onChange={handler}></input>
  </div>
);

let AddTargetBtn = ({handler}) => (
  <button className='btn' onClick={handler}>Add new</button>
);

const SearchContainer = (props) => {
  const {
    searchByName, 
    searchByStatus, 
    handleSearchByName, 
    handleSearchByStatus,
    addNewCompany,
  } = props;

  return (
    <div className='search-container row space-between min-space-between-h'>
      <SearchByName
        value={searchByName}
        handler={handleSearchByName}/>
      <SearchByStatus 
        value={searchByStatus}
        handler={handleSearchByStatus}/>
      <AddTargetBtn handler={addNewCompany}/>
    </div>
  )
};

export default SearchContainer;