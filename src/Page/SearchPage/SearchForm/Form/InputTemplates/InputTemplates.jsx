import React from "react";
import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import FioInput from './FioInput/FioInput.jsx';
import StartDate from "./StartDate/StartDate.jsx";
import EndDate from "./EndDate/EndDate.jsx";

import styles from './style.css'

class InputTemplates extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <StartDate/>
        <EndDate/>
        <FioInput/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(InputTemplates);