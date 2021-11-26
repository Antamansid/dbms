import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import HelpText from "./HelpText/HelpText.jsx";
import InputTelephone from "./InputTelephone/InputTelephone.jsx";

import styles from './style.css';

class Telephone extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <HelpText/>
        <InputTelephone/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Telephone);