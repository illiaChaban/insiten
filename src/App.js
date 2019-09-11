import React, {Component} from 'react';

const statuses = ["approved", "pending approval", "researching", "declined"];

// const mockData = [
//   {companyName: 'Google', keyContacts: ['1@gmail.com', '2@gmail.com'], financialPerformance: "good", status: "approved"},
//   {companyName: 'Amazon', keyContacts: ['1@gmail.com', '2@gmail.com'], financialPerformance: "average", status: "researching"},
//   {companyName: 'McDonalds', keyContacts: ['1@gmail.com', '2@gmail.com'], financialPerformance: "bad", status: "declined"},
// ];

const Google = {
  companyInfo: {
    name: "Google Inc.",
    industry: 'Online Media',
    description: "Alphabet Inc is a provider of internet content products and portals. Its suite of brands includes Search, Android, YouTube, Apps, Maps & Ads.",
    marketCapitalization: '835 billion',
    stockPrice: 1216
  },
  keyContacts: [['Larry Page','lpage@google.com'], ['Sergey Brin', 'sbrin@google.com']],
  financialPerformance: "good",
  status: statuses[2],
};
const Amazon = {
  companyInfo: {
    name: "Amazon.com Inc.",
    industry: 'Online Media',
    description: "Amazon.com Inc is an online retailer. The Company sells its products through the website which provides services, such as advertising services and co-branded credit card agreements. It also offers electronic devices like Kindle e-readers and Fire tablets.",
    marketCapitalization: '910 billion',
    stockPrice: 1821
  },
  keyContacts: [['Jeffrey P. Bezos','bezos@amazon.com']],
  financialPerformance: "good",
  status: statuses[3],
};
const Tesla = {
  companyInfo: {
    name: "Tesla Inc.",
    industry: 'Autos',
    description: "Tesla Inc is a vertically integrated sustainable energy company. It designs, develops, manufactures and sells high-performance fully electric vehicles and electric vehicle powertrain components.",
    marketCapitalization: '42 billion',
    stockPrice: 246.9
  },
  keyContacts: [['Elon Musk','musk@tesla.com'], ['Jeffrey Brian Straubel', 'jstraubel@tesla.com']],
  financialPerformance: "average",
  status: statuses[0],
};
const Apple = {
  companyInfo: {
    name: "Apple Inc.",
    industry: 'Computer Hardware',
    description: "Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.",
    marketCapitalization: '1116 billion',
    stockPrice: 223.3
  },
  keyContacts: [['Timothy D. Cook','tcook@apple.com'], ['Kevin Lynch', 'klynch@apple.com']],
  financialPerformance: "great",
  status: statuses[2],
};
const mockData = [Google, Amazon, Tesla, Apple];



const Container = ({classes, children}) => (
  <div className={"container " + classes}>
    {children}
  </div>
);


const SearchByName = ({searchByName, handleSearchByName}) => (
  <div className='flex-grow-1'>
    <input 
      type='text' 
      placeholder='Search by name...'
      value={searchByName}
      onChange={handleSearchByName}></input>
  </div>
);

const SearchByStatus = ({searchByStatus, handleSearchByStatus}) => (
  <div className="flex flex-center-h flex-grow-1">
    <select value={searchByStatus} onChange={handleSearchByStatus}>
      <option value=''>Filter by status</option>
      {statuses.map( status => <option value={status} key={status}>{status}</option>)}
    </select>
  </div>
);

const AddTargetBtn = ({handleStartAdd}) => (
  <button className='btn' onClick={handleStartAdd}>Add new</button>
);

const SearchContainer = (props) => {
  const {
    handleStartAdd, 
    searchByName, 
    searchByStatus, 
    handleSearchByName, 
    handleSearchByStatus,
  } = props;

  return (
    <div className='search-container row space-between min-space-between-h'>
      <SearchByName
        searchByName={searchByName}
        handleSearchByName={handleSearchByName}/>
      <SearchByStatus 
        searchByStatus={searchByStatus}
        handleSearchByStatus={handleSearchByStatus}/>
      <AddTargetBtn 
        handleStartAdd={handleStartAdd}/>
    </div>
  )
};

const TargetsList = ({targets, handleDelete}) => (
  <div className='col space-between min-space-between-v'>
    {targets.map( target => (
      <Target 
        data={target} 
        handleDelete={handleDelete}
        key={target.companyInfo.name}/>
    ))}
  </div>
);

const TargetActions = ({data, handleDelete}) => (
  <div className='row space-between actions'>
    <button className='btn' onClick={()=>handleDelete(data)}>Delete</button>
    <button className='btn'>Edit</button>
  </div>
);

function Target(props) {
  const {companyInfo, keyContacts, financialPerformance, status} = props.data;
  const {name, industry, description, marketCapitalization, stockPrice} = companyInfo;

  return (
    <div className='target-container'>
      <div className='row space-between'>
        <div className='name'>{name}</div>
        <TargetActions {...props}/>
      </div>
      <div>Status: {status}</div>
      <span>Performance: {financialPerformance}</span>
      
    </div>
  );
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByName: '',
      searchByStatus: '',
      targets: [],
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

  handleStartAdd = () => {
    // reset search
    this.setState({
      searchByName: '',
      searchByStatus: ''
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
    const {searchByName, searchByStatus} = this.state;
    const targets = this.filterSearchedTargets();
    return (
      <Container classes='main-container center'>
        <SearchContainer
          handleStartAdd={this.handleStartAdd}
          handleSearchByStatus={this.handleSearchByStatus}
          handleSearchByName={this.handleSearchByName}
          searchByName={searchByName}
          searchByStatus={searchByStatus}
          resetSearch={this.resetSearch}/>
        <TargetsList 
          targets={targets} 
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
      </Container>
    );
  }
}


export default App;
