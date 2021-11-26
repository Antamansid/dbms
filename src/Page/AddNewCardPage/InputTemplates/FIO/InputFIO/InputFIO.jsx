import React from "react";

import store from '../../../../../store/store.jsx';

import userActions from "../../../../../actions/userActions.jsx";
import { connect } from "react-redux";

import styles from './style.css'

class InputFIO extends React.Component{
  constructor(props){
    super(props)
    this.fioEdit = this.fioEdit.bind(this);
    this.inpt = React.createRef(); 
  }
  fioEdit(event){
    this.props.dispatch(userActions.setNewInputFio(event.currentTarget.value))
  }
  render() {
      return <div className = {styles.main}>
        <input type="text" name="" className = {styles.inpt} value = {this.props.fio || ''} onChange = {this.fioEdit}  ref = {this.inpt}/>
      </div>;
  }
  componentDidUpdate(){
    if(this.props.focus){
      console.log('tes?')
      this.inpt.current.focus()
    }
  }
}

function mapStateToProps(store) {
  return {
      fio: store.users.NewFioInput_state.fio,
      status: store.users.NewFioInput_state.status,
      focus: store.users.NewFioInput_state.focus
  }
}

export default connect (mapStateToProps)(InputFIO);