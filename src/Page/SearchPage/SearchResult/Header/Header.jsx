import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import AddNewCardButton from "./AddNewCardButton/AddNewCardButton.jsx";
import StatusText from "./StatusText/StatusText.jsx";

import styles from './style.css'

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <StatusText/>
        <AddNewCardButton/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Header);