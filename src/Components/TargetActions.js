import React from 'react';
import {connect} from 'react-redux';
import {deleteCompany, editCompany, cancelEdit, saveEdit} from './../redux/actions';
import {SmallBtn} from './TargetElements';

const ActionsContainer = ({children}) => (
  <div className='row space-between actions'>
    {children}
  </div>
);

let TargetStaticActions = ({data, deleteCompany, editCompany}) => (
  <ActionsContainer>
    <SmallBtn name='delete' handler={()=>deleteCompany(data)}/>
    <SmallBtn name='edit' handler={()=>editCompany(data)}/>
  </ActionsContainer>
);
TargetStaticActions = connect(
  null,
  {deleteCompany, editCompany}
)(TargetStaticActions);


let TargetEditActions = ({data, cancelEdit, saveEdit}) => (
  <ActionsContainer>
    <SmallBtn name='cancel' handler={()=>cancelEdit(data)}/>
    <SmallBtn name='save' handler={()=>saveEdit(data)}/>
  </ActionsContainer>
);
TargetEditActions = connect(
  null,
  {cancelEdit, saveEdit}
)(TargetEditActions);

export {
  TargetStaticActions,
  TargetEditActions
};