import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import styles from './style.css';

class CancelButton extends React.Component{
  constructor(props){
    super(props)
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch(){
    window.location.href = '#/';
  }
  render() {
      return <div className = {styles.main}>
      <button className = {styles.btn} onClick = {this.goToSearch}>Отменить</button>
    </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(CancelButton);