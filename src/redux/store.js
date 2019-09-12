import {createStore} from 'redux';
import {
  updateCompanies, 
  deleteCompany,
  editCompany,
  addCompany,
} from './actions';
import {
  updateCompaniesReducer,
  deleteCompanyReducer,
  editCompanyReducer,
  addCompanyReducer,
} from './reducers';

const initialState = {
  companies: [],
  addingNew: true,
};



const reducers = {
  [updateCompanies]: updateCompaniesReducer,
  [deleteCompany]: deleteCompanyReducer,
  [editCompany]: editCompanyReducer,
  [addCompany]: addCompanyReducer
};
const rootReducer = (oldState = initialState, action) => {
  const reducer = reducers[action.type];
  if (reducer) return reducer(oldState, action.payload);
  return oldState;
};

let store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());
// store.dispatch(updateCompanies(['hello']))
// console.log(store.getState());
console.log(store);

export default store;