import React from 'react';

const SearchByName = ({searchByName, handleSearchByName}) => (
  <div className='flex-grow-1'>
    <input 
      type='text' 
      placeholder='Search by name...'
      value={searchByName}
      onChange={handleSearchByName}></input>
  </div>
);

const SearchByStatus = ({searchByStatus, handleSearchByStatus, statuses}) => (
  <div className="flex flex-center-h flex-grow-1">
    <select value={searchByStatus} onChange={handleSearchByStatus}>
      <option value=''>Filter by status</option>
      {statuses.map( status => <option value={status} key={status}>{status}</option>)}
    </select>
  </div>
);

const AddTargetBtn = ({handleAddNew, addingNew}) => {
  // let className = 'btn';
  // if (addingNew) className += ' disabled';
  return (
    addingNew ? 
      <button className='btn' disabled={true}>Add new</button> :
      <button className='btn' onClick={handleAddNew}>Add new</button> 
  )
}

function getAllStatuses(companies) {
  return companies.reduce( (statuses, {status}) => {
    if (!statuses.includes(status)) statuses.push(status);
    return statuses;
  }, []);
};

const SearchContainer = (props) => {
  const {
    handleAddNew, 
    searchByName, 
    searchByStatus, 
    handleSearchByName, 
    handleSearchByStatus,
    targets,
    addingNew,
  } = props;

  return (
    <div className='search-container row space-between min-space-between-h'>
      <SearchByName
        searchByName={searchByName}
        handleSearchByName={handleSearchByName}/>
      <SearchByStatus 
        searchByStatus={searchByStatus}
        handleSearchByStatus={handleSearchByStatus}
        statuses={getAllStatuses(targets)}/>
      <AddTargetBtn 
        addingNew={addingNew}
        handleAddNew={handleAddNew}/>
    </div>
  )
};

export default SearchContainer;