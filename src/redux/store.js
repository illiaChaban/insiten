import {createStore} from 'redux';
import {
  updateCompanies, 
  deleteCompany,
  toggleEditState,
  editCompany,
  addCompany,
} from './actions';
import {
  updateCompaniesReducer,
  deleteCompanyReducer,
  toggleEditReducer,
  editCompanyReducer,
  addCompanyReducer,
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


export default store;