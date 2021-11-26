import React from "react";

import store from '../../../../../../../../store/store.jsx';
import userActions from '../../../../../../../../actions/userActions.jsx';
import { connect } from "react-redux";

import styles from './style.css'

class InputDate extends React.Component{
  constructor(props){
    super(props)
    this.changeDate = this.changeDate.bind(this);
  }
  changeDate(event){
    this.props.dispatch(userActions.setEndDate(event.currentTarget.value));
  }
  render() {
      return <div>
        <input type="text" name="" className = {styles.main} value = {this.props.endDate || ''} onChange = {this.changeDate}/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      endDate: store.users.EndDateInput_state.endDate
  }
}

export default connect (mapStateToProps)(InputDate);