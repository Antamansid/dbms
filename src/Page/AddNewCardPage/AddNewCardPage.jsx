import React from "react";

import store from '../../store/store.jsx';
import { connect } from "react-redux";

import Header from "./Header/Header.jsx";
import InputTemplates from "./InputTemplates/InputTemplates.jsx";
import OperateButtons from "./OperateButtons/OperateButtons.jsx";

import styles from './style.css';

class AddNewCardPage extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <Header/>
        <InputTemplates/>
        <OperateButtons/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(AddNewCardPage);