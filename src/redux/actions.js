const UPDATE_COMPANIES = 'UPDATE_COMPANIES';
const DELETE_COMPANY = "DELETE_COMPANY";
// const EDIT_COMPANY = "EDIT_COMPANY";
const ADD_COMPANY = "ADD_COMPANY";
// const CANCEL_EDIT = "CANCEL_EDIT";
// const CANCEL_NEW = "CANCEL_NEW";
// const START_EDIT = "START_EDIT";
// const STOP_EDIT = "STOP_EDIT";
const TOGGLE_EDIT_STATE = "TOGGLE_EDIT_STATE";
const EDIT_COMPANY = "EDIT_COMPANY";

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

// export const editCompany = data => ({
//   type: EDIT_COMPANY,
//   payload: data
// });
// editCompany.toString = () => EDIT_COMPANY;

// export const saveEdit = data => ({});
// export const cancelEdit = data => ({
//   type: CANCEL_EDIT
// });

// export const startEdit = id => ({
//   type: START_EDIT,
//   payload: id
// });
// startEdit.toString = () => START_EDIT;

// export const stopEdit = id => ({
//   type: STOP_EDIT,
//   payload: id
// });
// startEdit.toString = () => STOP_EDIT;

export const toggleEditState = id => ({
  type: TOGGLE_EDIT_STATE,
  payload: id
});
toggleEditState.toString = () => TOGGLE_EDIT_STATE;

export const editCompany = (data) => ({
  type: EDIT_COMPANY,
  payload: data
});
editCompany.toString = () => EDIT_COMPANY;


export const addCompany = () => ({
  type: ADD_COMPANY,
  payload: null
});
addCompany.toString = () => ADD_COMPANY;