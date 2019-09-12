import {createStore} from 'redux';
import {
  updateCompanies, 
  deleteCompany,
  toggleEditState,
  editCompany,
  // editCompany,
  addCompany,
  // startEdit,
} from './actions';
import {
  updateCompaniesReducer,
  deleteCompanyReducer,
  toggleEditReducer,
  editCompanyReducer,

  // editCompanyReducer,
  addCompanyReducer,
  // startEditReducer,
} from './reducers';

const initialState = {
  companies: [],
};



const reducers = {
  [updateCompanies]: updateCompaniesReducer,
  [deleteCompany]: deleteCompanyReducer,
  [toggleEditState]: toggleEditReducer,
  [editCompany]: editCompanyReducer,
  [addCompany]: addCompanyReducer,
  // [startEdit]: startEditReducer,
};
const rootReducer = (oldState = initialState, action) => {
  const reducer = reducers[action.type];
  if (reducer) {
    // console.log('reducing ', action.type, action.payload)
    return reducer(oldState, action.payload);
  }
  return oldState;
};

let store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());
// store.dispatch(updateCompanies(['hello']))
// console.log(store.getState());
console.log({store});
window.store = store;

export default store;