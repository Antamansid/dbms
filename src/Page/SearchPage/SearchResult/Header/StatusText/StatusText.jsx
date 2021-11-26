import React from "react";

import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import styles from './style.css'

class StatusText extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.count <= 20){
      return <div className = {styles.main}>
        <p  className = {styles.text}>Найдено {this.props.count} карточек</p>
      </div>;
    }
    return <div className = {styles.main}>
      <p  className = {styles.text}>Найдено {this.props.count} карточек, показано первые 20</p>
    </div>;
  }
}

function mapStateToProps(store) {
  return {
      count: store.users.StatusSearchResultText_state.count
  }
}

export default connect (mapStateToProps)(StatusText);