import React, {Component} from 'react';
import {Input, Select, Textarea, Contacts} from './TargetElements';
import {TargetStaticActions, TargetEditActions} from './TargetActions';
import {connect} from 'react-redux';
import {statuses} from './constants';
// import {deleteCompany} from './../redux/actions';


let TargetsList = ({targets, addingNew}) => (
  <div className='col space-between min-space-between-v'>
    {/* {addingNew && <TargetEdit/>} */}
    {targets.map( target => (
      <Target 
        data={target} 
        key={target.id}
      />
    ))}
  </div>
);
TargetsList = connect(
  ({addingNew}) => ({addingNew})
)(TargetsList);


const TargetStatic = ({data}) => {
  const {
    name, 
    industry, 
    description, 
    marketCapitalization, 
    stockPrice, 
    keyContacts, 
    financialPerformance, 
    status,
  } = data;

  return (
    <div className='target-container'>
      <div className='row space-between'>
        <div className='name'>{name}</div>
        <TargetStaticActions data={data}/>
      </div>
      <div className='status'>
        <span>Status: {status}</span>
      </div>
      <div className='info'>
        <div className='row space-between'>
          <ul>
            <li>Industry: {industry}</li>
            <li>Market Capitalization: ${marketCapitalization}</li>
            <li>Stock Price: ${stockPrice}</li>
            <li>Performance: {financialPerformance}</li>
          </ul>

          <Contacts keyContacts={keyContacts}/>
        </div>
        <p>Description: {description}</p>
      </div>
      
    </div>
  );
};


// const emptyTarget = {
//   "companyInfo": {
//     "name": '',
//     "industry": '',
//     "description": '',
//     "marketCapitalization": '',
//     "stockPrice": null,
//   },
//   "keyContacts": [],
//   "financialPerformance": '',
//   "status": '',
// };

const emptyFlat = {
  "name": '',
  "industry": '',
  "description": '',
  "marketCapitalization": '',
  "stockPrice": null,
  "keyContacts": [],
  "financialPerformance": '',
  // hardcoding first value that matches the first option passed in
  // to the status  --- CHANGE!
  "status": 'approved', 
};

class Target extends Component {
  constructor(props) {
    super(props);
    // this.state = this.props.data;
  }

  handleChange = (e) => {
    // const field = e.target;
    // const name = field.getAttribute('data-name');
    // const val = field.value;
    // this.setState({
    //   [name]: val,
    // })

    // rewrite !!!!! with redux
  };



  // componentDidMount() {
  //   console.log(this.props)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log({prevState, state: this.state});
  // }

  renderField = (field, name) => {
    const props = {
      name,
      handler: this.handleChange,
      value: this.props.data[name],
    };
    // console.log("hi", this.props.data, name, this.props.data[name])
    switch (field) {
      case 'input':
        return <Input {...props}/>;
      case 'select':
        return <Select {...props} options={statuses} />;
      case 'textarea':
        return <Textarea {...props} />;
      default:
        return null;
    }
  }

  render() {
    // const {edit} = this.props;
    // console.log(this.props.data.edit)
    // console.log(this.props.data)
    const {data} = this.props;
    if (!data.edit) return <TargetStatic data={this.props.data}/>;

    return (
      <div className='target-container'>
        <div className='row space-between'>
          {this.renderField('input', 'name')}
          <TargetEditActions data={data}/>
        </div>
        {this.renderField('select', 'status')}
        {this.renderField('textarea', 'description')}
      </div>
    );
  }
};




export default TargetsList;