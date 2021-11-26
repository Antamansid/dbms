import React from "react";
import Inputmask from "inputmask";

import store from '../../../../../store/store.jsx';

import userActions from "../../../../../actions/userActions.jsx";
import { connect } from "react-redux";

import styles from './style.css'

class InputTelephone extends React.Component{
  constructor(props){
    super(props)
    this.inpt = React.createRef()
    this.telephoneEdit = this.telephoneEdit.bind(this);
  }
  telephoneEdit(event){
    this.props.dispatch(userActions.setTelephoneInput(event.currentTarget.value))
  }
  render() {
      return <div className = {styles.main}>
        <input type="text" name="" className = {styles.inpt} ref = {this.inpt} onChange = {this.telephoneEdit} value = {this.props.telephone}/>
      </div>;
  }
  componentDidMount(){
    let node = this.inpt.current;
    let im = new Inputmask("+7(999)999-99-99")
    im.mask(node);
  }
}

function mapStateToProps(store) {
  return {
      telephone: store.users.TelephoneInput_state.telephone
  }
}

export default connect (mapStateToProps)(InputTelephone);