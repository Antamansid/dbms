import React from "react";

import store from '../../../../../store/store.jsx';

import adressActions from "../../../../../actions/adressActions.jsx";

import { connect } from "react-redux";

import styles from './style.css';

class InputFIAS extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return <div className = {styles.main}>
      <input type="text" name="" className = {styles.inpt} readOnly = {true} value = {this.props.fias || ''}/>
    </div>;
  }
}

function mapStateToProps(store) {
  return {
    fias: store.adresses.InputFIAS_state.fias
  }
}

export default connect (mapStateToProps)(InputFIAS);