import React from 'react';
import {connect} from 'react-redux';
import {deleteCompany, toggleEdit} from './../redux/actions';
import {SmallBtn} from './TargetElements';

const ActionsContainer = ({children}) => (
  <div className='row space-between actions'>
    {children}
  </div>
);

let TargetStaticActions = ({data, deleteCompany, toggleEdit}) => (
  <ActionsContainer>
    <SmallBtn name='delete' handler={()=>deleteCompany(data)}/>
    <SmallBtn name='edit' handler={()=>toggleEdit(data.id)}/>
  </ActionsContainer>
);
TargetStaticActions = connect(
  null,
  {deleteCompany, toggleEdit}
)(TargetStaticActions);


let TargetEditActions = ({data, toggleEdit}) => (
    <ActionsContainer>
      {/* <SmallBtn name='cancel' handler={()=>cancelEdit(data)}/> */}
      <SmallBtn name='done' handler={()=>toggleEdit(data.id)}/>
    </ActionsContainer>
);
TargetEditActions = connect(
  null,
  {toggleEdit}
)(TargetEditActions);

export {
  TargetStaticActions,
  TargetEditActions
};