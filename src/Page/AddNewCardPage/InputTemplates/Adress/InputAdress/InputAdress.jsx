import React from "react";

import $ from 'jquery';
import "jquery-ui";
import "jquery-ui/ui/widgets/autocomplete";

import store from '../../../../../store/store.jsx';
import adressActions from '../../../../../actions/adressActions.jsx';

import { connect } from "react-redux";

import styles from './style.css';

class InputAdress extends React.Component{
  constructor(props){
    super(props);
    this.inpt = React.createRef(); 
    this.adressEdit = this.adressEdit.bind(this);
  }
  adressEdit(event){
    this.props.dispatch(adressActions.editAdressInput(event.currentTarget.value))
  }
  render() {
    return <div className = {styles.main}>
      <input type="text" name="" className = {styles.inpt} ref = {this.inpt} value = {this.props.inputAdress || ''} onChange = {this.adressEdit}/>
    </div>;
  }
  componentDidMount(){
    let node = this.inpt.current;
    $(node).autocomplete({
      source: (request, response)=>{
        this.props.dispatch(adressActions.getAdresses(request.term)).then(()=>{
          let readyMgnt = [];
          console.log(this.props.adresses)
          this.props.adresses.forEach((item, index, arr)=>{
                  readyMgnt.push({label : item.adress, value : item.adress, fias : item.fias});
          });
          response(readyMgnt);
        })
      },
      select: (event, ui)=>{
        this.props.dispatch(adressActions.editAdressInput(ui.item.value));
        this.props.dispatch(adressActions.editFiasInput(ui.item.fias));
      },
      minLength: 1
    });
  }
  componentDidUpdate(){
    if(this.props.focus){
      this.inpt.current.focus()
    }
  }
}

function mapStateToProps(store) {
  return {
    adresses: store.adresses.NewCardInputAdress_state.adresses,
    inputAdress: store.adresses.NewCardInputAdress_state.inputAdress,
    focus: store.adresses.NewCardInputAdress_state.focus
  }
}

export default connect (mapStateToProps)(InputAdress);