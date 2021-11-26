import React from "react";

import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import CreatDate from "./CreateDate/CreatDate.jsx";
import FIO from "./FIO/FIO.jsx";
import Telephone from "./Telephone/Telephone.jsx";
import Adress from "./Adress/Adress.jsx";

import styles from './style.css'


class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <CreatDate/>
        <FIO/>
        <Telephone/>
        <Adress/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Header);