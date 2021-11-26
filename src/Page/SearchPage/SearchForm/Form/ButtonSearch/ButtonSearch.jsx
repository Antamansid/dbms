import React from "react";

import store from '../../../../../store/store.jsx';
import userActions from "../../../../../actions/userActions.jsx";
import { connect } from "react-redux";

import styles from './style.css'

class ButtonSearch extends React.Component{
  constructor(props){
    super(props)
    this.searchUsers = this.searchUsers.bind(this);
  }
  searchUsers(){
    this.props.dispatch(userActions.getUsers(this.props.fio, this.props.startDate, this.props.endDate));
  }
  render() {
      return <div>
        <button className = {styles.main} onClick = {this.searchUsers}>Выполнить поиск</button>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      fio: store.users.FindFioInput_state.fio,
      startDate: store.users.StartDateInput_state.startDateObj,
      endDate: store.users.EndDateInput_state.endDateObj
  }
}

export default connect (mapStateToProps)(ButtonSearch);