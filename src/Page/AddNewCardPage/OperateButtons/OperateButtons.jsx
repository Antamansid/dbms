import React from "react";

import store from '../../../store/store.jsx';
import { connect } from "react-redux";

import SaveButton from "./SaveButton/SaveButton.jsx";
import SaveAndContinueButton from "./SaveAndContinueButton/SaveAndContinueButton.jsx";
import CancelButton from "./CancelButton/CancelButton.jsx";

import styles from './style.css';

class OperateButtons extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <SaveButton/>
        <SaveAndContinueButton/>
        <CancelButton/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(OperateButtons);