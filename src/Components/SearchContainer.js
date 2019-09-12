import React from 'react';
// import store from './../redux/store';
import {connect} from 'react-redux';
import {addCompany} from './../redux/actions';
import {statuses} from './constants';

// function getAllStatuses() {
//   const { companies } = store.getState();
//   return companies.reduce( (statuses, {status}) => {
//     if (!statuses.includes(status)) statuses.push(status);
//     return statuses;
//   }, []);
// };

const SearchByStatus = ({searchByStatus, handleSearchByStatus}) => (
  <div className="flex flex-center-h flex-grow-1">
    <select value={searchByStatus} onChange={handleSearchByStatus}>
      <option value=''>Filter by status</option>
      {statuses.map( status => <option value={status} key={status}>{status}</option>)}
    </select>
  </div>
);

const SearchByName = ({searchByName, handleSearchByName}) => (
  <div className='flex-grow-1'>
    <input 
      type='text' 
      placeholder='Search by name...'
      value={searchByName}
      onChange={handleSearchByName}></input>
  </div>
);

let AddTargetBtn = ({addingNew, addCompany}) => {
  return (
    addingNew ? 
      <button className='btn' disabled={true}>Add new</button> :
      <button className='btn' onClick={addCompany}>Add new</button> 
  )
};
AddTargetBtn = connect(
  (state) => ({
    addingNew: state.addingNew
  }),
  {addCompany}
)(AddTargetBtn);



const SearchContainer = (props) => {
  const {
    searchByName, 
    searchByStatus, 
    handleSearchByName, 
    handleSearchByStatus,
  } = props;

  return (
    <div className='search-container row space-between min-space-between-h'>
      <SearchByName
        searchByName={searchByName}
        handleSearchByName={handleSearchByName}/>
      <SearchByStatus 
        searchByStatus={searchByStatus}
        handleSearchByStatus={handleSearchByStatus}/>
      <AddTargetBtn />
    </div>
  )
};

export default SearchContainer;