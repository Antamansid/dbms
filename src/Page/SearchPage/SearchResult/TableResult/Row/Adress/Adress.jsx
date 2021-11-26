import React from "react";

import store from '../../../../../../store/store.jsx';
import { connect } from "react-redux";

import DeleteButton from "./DeleteButton/DeleteButton.jsx";

import styles from './style.css'

class Adress extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <p className = {styles.text}>{this.props.adress}</p>
        <DeleteButton id = {this.props.id}/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Adress);