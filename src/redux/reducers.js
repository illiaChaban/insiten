import {cloneObj, generateId} from './../lib';

export const updateCompaniesReducer = (oldState, companies) => ({
  ...oldState,
  companies
});

export const deleteCompanyReducer = (oldState, company) => {
  const {companies} = oldState;
  const updated = companies.filter( x => x !== company);
  return {...oldState, companies: updated };
};

export const editCompanyReducer = (oldState, company) => {
  const { companies } = oldState;
  const updatedCompanies = companies.map( x => x.id === company.id ? company : x );
  // ...
  return {...oldState, companies: updatedCompanies};
};


const getEmptyCompanyInfo = () => ({
  "name": '',
  "industry": '',
  "description": '',
  "marketCapitalization": '',
  "stockPrice": '',
  "keyContacts": [],
  "financialPerformance": '',
  // hardcoding first value that matches the first option passed in
  // to the status  --- CHANGE!
  "status": 'approved', 
  "edit": true,
  "id": generateId(),
});
export const addCompanyReducer = (oldState) => {
  const newState = cloneObj( oldState );
  const newCompany = getEmptyCompanyInfo();
  newState.companies.unshift( newCompany );
  return newState;
};

// export const startEditReducer = (oldState, id) => {
//   const {companies} = oldState;
//   const index = companies.findIndex( company => company.id === id);
//   const companyInfo = { ...companies[index] };
//   companyInfo.edit = true;
//   return {...oldState}
// }


// export const startEditReducer = (oldState, id) => {
//   const {companies} = oldState;
//   const index = companies.findIndex( company => company.id === id);
//   const companyInfo = { ...companies[index] };
//   companyInfo.edit = true;
//   return {...oldState}
// }

export const toggleEditReducer = (oldState, id) => {
  const {companies} = oldState;
  const index = companies.findIndex( company => company.id === id);
  const companyInfo = { ...companies[index] };
  companyInfo.edit = !companyInfo.edit;
  const updatedCompanies = companies.map( x => x.id === id ? companyInfo : x );
  return {...oldState, companies: updatedCompanies};
};