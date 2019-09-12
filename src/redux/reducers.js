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
  // ...
  return {...oldState};
};

export const addCompanyReducer = (oldState) => {
  // ...
  return {...oldState, addingNew: true};
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