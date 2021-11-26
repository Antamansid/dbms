import React from "react";

import store from '../../../../../../../store/store.jsx';
import { connect } from "react-redux";

import InputDate from "./InputDate/InputDate.jsx";
import CalendarButton from "./CalendarButton/CalendarButton.jsx";

import styles from './style.css'

class WorkPlace extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <InputDate/>
        <CalendarButton/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(WorkPlace);