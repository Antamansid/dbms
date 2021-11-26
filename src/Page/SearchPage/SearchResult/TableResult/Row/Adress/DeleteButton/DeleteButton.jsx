import React from "react";

import store from '../../../../../../../store/store.jsx';
import userActions from "../../../../../../../actions/userActions.jsx";
import { connect } from "react-redux";

import styles from './style.css'

class DeleteButton extends React.Component{
  constructor(props){
    super(props)
    this.deleteRow = this.deleteRow.bind(this);
  }
  deleteRow(){
    this.props.dispatch(userActions.deleteUser(this.props.id)).then(()=>{
      this.props.dispatch(userActions.getUsers(this.props.fio, this.props.startDate, this.props.endDate));
    })
  }
  render() {
      return <div className = {styles.main}>
        <button onClick = {this.deleteRow} className = {styles.btn}><img src="https://img.icons8.com/ios/50/000000/full-trash--v1.png" className = {styles.img}/></button>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
    fio: store.users.FindFioInput_state.fio,
    startDate: store.users.StartDateInput_state.startDate,
    endDate: store.users.EndDateInput_state.endDate
  }
}

export default connect (mapStateToProps)(DeleteButton);