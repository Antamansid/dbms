import React from "react";

import store from '../../../store/store.jsx';
import { connect } from "react-redux";

import Header from "./Header/Header.jsx";
import TableResult from "./TableResult/TableResult.jsx";

import styles from './style.css'

class SearchResult extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {styles.main}>
        <Header/>
        <TableResult/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(SearchResult);