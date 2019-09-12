import mockData from './mockData.json';
import SearchContainer from './Components/SearchContainer';
import TargetsList from './Components/TargetsList';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCompanies, addCompany} from './redux/actions';
import {flattenObject, generateId} from './lib';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByName: '',
      searchByStatus: '',
    };
  }

  componentDidMount = () => {
    //simulating fetch request
    const flattened = mockData.map( company => {
      const obj = flattenObject(company);
      obj.id = obj.id || generateId();
      obj.edit = false;
      return obj;
    });
    this.props.updateCompanies(flattened); 
  };

  addNewCompany = () => {
    // reset search to be able to show
    // empty card
    this.setState({
      searchByName: '',
      searchByStatus: '',
    });
    this.props.addCompany();
  };


  handleSearchByName = (e) => {
    let str = e.target.value;
    if (str) str = str.toLowerCase();
    this.setState({
      searchByName: str
    })
  };

  handleSearchByStatus = (e) => {
    this.setState({
      searchByStatus: e.target.value
    })
  };

  filterSearchedTargets = () => {
    const {searchByName, searchByStatus} = this.state;
    const {companies} = this.props;
    let filtered = companies.filter( company => {
      if (searchByName && !company.name.toLowerCase().includes(searchByName)) return false;
      if (searchByStatus && company.status !== searchByStatus) return false;
      return true;
    });
    return filtered;
  }

  render() {
    const {searchByName, searchByStatus} = this.state;
    const searchedCompanies = this.filterSearchedTargets();
    return (
      <div className='main-container'>
        <SearchContainer
          handleSearchByStatus={this.handleSearchByStatus}
          handleSearchByName={this.handleSearchByName}
          searchByName={searchByName}
          searchByStatus={searchByStatus}
          addNewCompany={this.addNewCompany}
        />
        <TargetsList 
          targets={searchedCompanies} 
        />
      </div>
    );
  }
}


export default connect(
  (state) => {
    const {companies} = state;
    return {
      companies
    }
  },
  { updateCompanies, addCompany }
)(App);
