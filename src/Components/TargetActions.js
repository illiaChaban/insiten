import React from 'react';
import {connect} from 'react-redux';
import {deleteCompany, toggleEditState} from './../redux/actions';
import {SmallBtn} from './TargetElements';

let TargetActions = ({data, deleteCompany, toggleEditState}) => (
  <div className='row space-between actions'>
    <SmallBtn name='delete' handler={()=>deleteCompany(data)}/>
    <SmallBtn 
      name={data.edit ? 'done' : 'edit'} 
      handler={()=>toggleEditState(data.id)}
    />
  </div>
);

export default connect(
  null,
  {deleteCompany, toggleEditState}
)(TargetActions);