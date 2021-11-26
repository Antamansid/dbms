import React from "react";

import store from '../../../../../store/store.jsx';
import { connect } from "react-redux";

import {useNavigate} from 'react-router-dom';

import styles from './style.css'

class AddNewCardButton extends React.Component{
  constructor(props){
    super(props)
    this.goToAddPage = this.goToAddPage.bind(this);
  }
  goToAddPage(){
    window.location.href = '#/newUser';
  }
  render() {
      return <div className = {styles.main}>
        <button className = {styles.btn} onClick = {this.goToAddPage}>Добавить карточку</button>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(AddNewCardButton);