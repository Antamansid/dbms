import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import HelpText from "./HelpText/HelpText.jsx";
import InputAdress from "./InputAdress/InputAdress.jsx";

import style from './style.css';

class Adress extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return <div className = {style.main}>
        <HelpText/>
        <InputAdress/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Adress);