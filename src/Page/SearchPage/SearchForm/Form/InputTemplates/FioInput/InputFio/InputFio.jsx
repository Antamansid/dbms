import React from "react";

import store from '../../../../../../../store/store.jsx';
import userActions from '../../../../../../../actions/userActions.jsx';
import { connect } from "react-redux";
import styles from './style.css'

class InputFio extends React.Component{
  constructor(props){
    super(props)
    this.changFio = this.changFio.bind(this);
  }
  changFio(event){
    this.props.dispatch(userActions.setFindInputFio(event.currentTarget.value));
  }
  render() {
      return <div>
      <input type="text" name="" className = {styles.main} value = {this.props.fio || ''} onChange = {this.changFio}/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      fio: store.users.FindFioInput_state.fio
  }
}

export default connect (mapStateToProps)(InputFio);