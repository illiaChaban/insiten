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