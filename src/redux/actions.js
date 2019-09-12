const UPDATE_COMPANIES = 'UPDATE_COMPANIES';
const DELETE_COMPANY = "DELETE_COMPANY";
const EDIT_COMPANY = "EDIT_COMPANY";
const ADD_COMPANY = "ADD_COMPANY";

export const updateCompanies = data => ({
  type: UPDATE_COMPANIES,
  payload: data
});
updateCompanies.toString = () => UPDATE_COMPANIES;

export const deleteCompany = data => ({
  type: DELETE_COMPANY,
  payload: data
});
deleteCompany.toString = () => DELETE_COMPANY;

export const editCompany = data => ({
  type: EDIT_COMPANY,
  payload: data
});
editCompany.toString = () => EDIT_COMPANY;

export const saveEdit = data => ({});
export const cancelEdit = data => ({});




export const addCompany = () => ({
  type: ADD_COMPANY,
  payload: null
});
addCompany.toString = () => ADD_COMPANY;