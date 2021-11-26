import React from "react";

import store from '../../../../../../store/store.jsx';
import { connect } from "react-redux";
import styles from './style.css'

class Telephone extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return <div className = {styles.main}>
        <p>Телефон</p>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Telephone);