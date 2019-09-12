import mockData from './mockData.json';
import SearchContainer from './Components/SearchContainer';
import TargetsList from './Components/TargetsList';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByName: '',
      searchByStatus: '',
      targets: [],
      addingNew: true,
    };
  }

  componentDidMount = () => {
    this.setState({targets: mockData})
  };

  handleDelete = (companyInfo) => {
    const filteredTargets = this.state.targets
      .filter( target => target !== companyInfo );
    this.setState({targets: filteredTargets});
  };

  handleEdit = (companyInfo) => {
    // ...
  };

  handleAddNew = () => {
    // reset search
    this.setState({
      searchByName: '',
      searchByStatus: '',
      addingNew: true,
    });
  };

  cancelAddNew = () => {
    this.setState({
      addingNew: false
    });
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
    const {targets, searchByName, searchByStatus} = this.state;
    let filtered = targets.filter( target => {
      if (searchByName && !target.companyInfo.name.toLowerCase().includes(searchByName)) return false;
      if (searchByStatus && target.status !== searchByStatus) return false;
      return true;
    });
    return filtered;
  }

  render() {
    const {searchByName, searchByStatus, addingNew} = this.state;
    const targets = this.filterSearchedTargets();
    return (
      <div className='main-container'>
        <SearchContainer
          handleAddNew={this.handleAddNew}
          handleSearchByStatus={this.handleSearchByStatus}
          handleSearchByName={this.handleSearchByName}
          searchByName={searchByName}
          searchByStatus={searchByStatus}
          resetSearch={this.resetSearch}
          targets={targets}
          addingNew={addingNew}/>
        <TargetsList 
          addingNew={addingNew}
          targets={targets} 
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
      </div>
    );
  }
}


export default App;
