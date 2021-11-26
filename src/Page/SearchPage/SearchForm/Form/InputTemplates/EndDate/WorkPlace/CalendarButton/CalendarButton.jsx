import React from "react";

import $ from  "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/datepicker";

import store from '../../../../../../../../store/store.jsx';
import userActions from '../../../../../../../../actions/userActions.jsx';
import { connect } from "react-redux";

import styles from './style.css';

class CalendarButton extends React.Component{
  constructor(props){
    super(props)
    this.inpt = React.createRef(); 
    this.changeDate = this.changeDate.bind(this);
  }
  changeDate(date){
    this.props.dispatch(userActions.setEndDate(date));
  }
  render() {
      return <div className = {styles.main}>
        <input type="submit" className = {styles.input} value = "" ref = {this.inpt}/>
      </div>;
  }
  componentDidMount(){
    let node = this.inpt.current;
    let changeDate = this.changeDate;
    $( function() {
      $(node).datepicker({
        dateFormat: "dd.mm.yy",
        onSelect : (date)=>{
          console.log(date);
          changeDate(date);
          $(node).datepicker("setDate", null);
        }
      });
    } );
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(CalendarButton);