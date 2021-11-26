import React from "react";

import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import CreatDate from "./CreateDate/CreatDate.jsx";
import FIO from "./FIO/FIO.jsx";
import Telephone from "./Telephone/Telephone.jsx";
import Adress from "./Adress/Adress.jsx";

import styles from './style.css'

class Row extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <CreatDate createDate = {this.props.createDate}/>
        <FIO fio = {this.props.fio}/>
        <Telephone telephone = {this.props.telephone}/>
        <Adress adress = {this.props.adress} id = {this.props.id}/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Row);