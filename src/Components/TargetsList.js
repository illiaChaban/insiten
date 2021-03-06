import React, {Component} from 'react';
import {Input, Select, Textarea, Contacts} from './TargetElements';
import TargetActions from './TargetActions';
import ContactsEdit from './ContactsEdit';
import {connect} from 'react-redux';
import {statuses} from './constants';
import {editCompany} from './../redux/actions';
import {cloneObj} from './../lib';


const TargetsList = ({targets}) => (
  <div className='col space-between min-space-between-v'>
    {targets.map( target => (
      <Target 
        data={target} 
        key={target.id}
      />
    ))}
  </div>
);

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
        <TargetActions data={data}/>
      </div>
      <div className='status'>
        <span>Status: {status}</span>
      </div>
      <div className='info'>
        <div className='row space-between'>
          <ul>
            <li>Industry: {industry || "No data"}</li>
            <li>Market Capitalization: {marketCapitalization ? '$'+marketCapitalization : "No data"}</li>
            <li>Stock Price: {stockPrice ? '$'+stockPrice : "No data"}</li>
            <li>Performance: {financialPerformance || "No data"}</li>
          </ul>

          <Contacts keyContacts={keyContacts}/>
        </div>
        {description && <p>Description: {description}</p>}
      </div>
      
    </div>
  );
};


function getElementData(e) {
  const field = e.target;
  const key = field.getAttribute('data-name');
  const idx = field.getAttribute('data-index');
  const val = field.value;
  return {key, val, idx};
};
class Target extends Component {

  updateCompany = update => {
    let company = cloneObj( this.props.data );
    update(company); // mutating cloned object
    this.props.editCompany(company);
  };

  handleChange = (e) => {
    this.updateCompany( company => {
      const {key, val, idx} = getElementData(e);
      if (idx) { // if array
        company[key][idx] = val; 
      } else { 
        company[key] = val; 
      }
    });
  };

  removeContact = (e) => {
    this.updateCompany( company => {
      const {key, idx} = getElementData(e);
      company[key].splice(idx, 1); // removing el
    });
  };

  addContact = (e) => {
    this.updateCompany( company => {
      const {key} = getElementData(e);
      company[key].push('');
    });
  };

  renderField = (field, name, label) => {
    const props = {
      name,
      label,
      handler: this.handleChange,
      value: this.props.data[name],
      key: name,
    };

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

    const {data} = this.props;
    if (!data.edit) return <TargetStatic data={this.props.data}/>;

    return (
      <div className='target-container edit'>
        <div className='row space-between name-edit align-center'>
          {this.renderField('input', 'name')}
          <TargetActions data={data}/>
        </div>
        {this.renderField('select', 'status')}
        <div className='info'>
          <div className='row'>
            <ul>
              <li>{this.renderField('input', 'industry')}</li>
              <li>{this.renderField('input', 'marketCapitalization', 'Market Capitalization')}</li>
              <li>{this.renderField('input', 'stockPrice', 'Stock Price')}</li>
              <li>{this.renderField('input', 'financialPerformance', 'Performance')}</li>
            </ul>
            <ContactsEdit 
              contacts={data.keyContacts}
              handleChange={this.handleChange}
              removeContact={this.removeContact}
              addContact={this.addContact}
            />
          </div>
          {this.renderField('textarea', 'description')}
        </div>
      </div>
    );
  }
};
Target = connect(
  null,
  {editCompany}
)(Target);

export default TargetsList;