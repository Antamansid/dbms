import React from "react";

import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import styles from './style.css';

class HelpText extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.status){
      return <div className = {styles.main}>
        <p className = {styles.textRed}>ФИО*</p>
      </div>
    }
    return <div className = {styles.main}>
      <p className = {styles.text}>ФИО*</p>
    </div>
  }
}

function mapStateToProps(store) {
  return {
      status: store.users.NewFioInputHelp_state.status
  }
}

export default connect (mapStateToProps)(HelpText);