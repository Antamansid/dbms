import React from "react";
import moment from 'moment';

import store from '../../../../store/store.jsx';

import userActions from "../../../../actions/userActions.jsx";
import adressActions from "../../../../actions/adressActions.jsx";

import { connect } from "react-redux";

import styles from './style.css';

class SaveButton extends React.Component{
  constructor(props){
    super(props)
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch(){
    let focus = false;
    let ready = true;
    if(this.props.fio === ''){
      ready = false;
      this.props.dispatch(userActions.redNewInputFioText());
      if(!focus){
        this.props.dispatch(userActions.focusNewInputFio());
        focus = true;
      }
    }
    if(this.props.adress === '' || this.props.adress !== this.props.adresses[0].adress){
      ready = false
      this.props.dispatch(adressActions.redAdressAndFIASText());
      if(!focus){
        this.props.dispatch(adressActions.focusAdressInput());
        focus = true;
      }
    }
    if(ready){
      let newUser = {
        fio: this.props.fio,
        telephone: this.props.telephone,
        adress: this.props.adress,
        fias: this.props.fias,
        date: moment().format()
      }
      this.props.dispatch(userActions.postUser(newUser)).then(()=>{
        this.props.dispatch(userActions.clearStartDate());
        this.props.dispatch(userActions.clearEndDate());
        this.props.dispatch(userActions.clearFindInputFio());
        this.props.dispatch(userActions.clearTelephoneInput());
        this.props.dispatch(userActions.clearNewInputFio());
        this.props.dispatch(adressActions.clearAdressInput());
        this.props.dispatch(adressActions.clearFiasInput());
        window.location.href = '#/';
      })
    }
  }
  render() {
      return <div className = {styles.main}>
        <button className = {styles.btn} onClick = {this.goToSearch}>Сохранить</button>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      fio: store.users.NewFioInput_state.fio,
      adress: store.adresses.NewCardInputAdress_state.inputAdress,
      adresses: store.adresses.NewCardInputAdress_state.adresses,
      fias: store.adresses.InputFIAS_state.fias,
      telephone : store.users.TelephoneInput_state.telephone
  }
}

export default connect (mapStateToProps)(SaveButton);