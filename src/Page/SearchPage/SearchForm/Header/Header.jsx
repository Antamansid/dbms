import React from "react";

import store from "../../../../store/store.jsx";
import { connect } from "react-redux";

import styles from './style.css';

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
        <h3 className = {styles.text}>Критерии поиска</h3>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Header);