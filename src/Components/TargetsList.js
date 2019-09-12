import React, {Component} from 'react';
import {Input, Contacts} from './TargetElements';
import {TargetStaticActions, TargetEditActions} from './TargetActions';
import {connect} from 'react-redux';
// import {deleteCompany} from './../redux/actions';


let TargetsList = ({targets, addingNew}) => (
  <div className='col space-between min-space-between-v'>
    {addingNew && <TargetNew/>}
    {targets.map( target => (
      <Target 
        data={target} 
        // handleDelete={handleDelete}
        key={target.companyInfo.name}/>
    ))}
  </div>
);
TargetsList = connect(
  ({addingNew}) => ({addingNew})
)(TargetsList);


const Target = ({data}) => {
  const {companyInfo, keyContacts, financialPerformance, status} = data;
  const {name, industry, description, marketCapitalization, stockPrice} = companyInfo;

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
            <li>Market Capitalization: {marketCapitalization}</li>
            <li>Stock Price: {stockPrice}</li>
            <li>Performance: {financialPerformance}</li>
          </ul>

          <Contacts keyContacts={keyContacts}/>
        </div>
        <p>Description: {description}</p>
      </div>
      
    </div>
  );
};



class TargetNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "companyInfo": {
        "name": '',
        "industry": '',
        "description": '',
        "marketCapitalization": '',
        "stockPrice": null
      },
      "keyContacts": [],
      "financialPerformance": '',
      "status": '',
    };
  }

  handleChange = (e) => {
    const field = e.target;
    const name = field.getAttribute('data-name');
    const val = field.value;
    // choosing the right object level to make changes
    if (name in this.state) {
      this.setState({
        [name]: val,
      })
    } else {
      const {companyInfo} = this.state;
      this.setState({
        companyInfo: {
          ...companyInfo,
          [name]: val,
        }
      });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log({prevState, state: this.state});
  // }

  Input = (name) => <Input name={name} handler={this.handleChange}/>;

  render() {
    const {data} = this.props;

    return (
      <div className='target-container'>
        <div className='row space-between'>
          {this.Input('name')}
          <TargetEditActions data={this.state}/>
        </div>
        {this.Input('status')}
  
      </div>
    );
  }
};




export default TargetsList;