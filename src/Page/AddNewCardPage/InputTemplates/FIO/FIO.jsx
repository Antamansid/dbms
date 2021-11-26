import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import HelpText from "./HelpText/HelpText.jsx";
import InputFIO from "./InputFIO/InputFIO.jsx";

import style from './style.css'

class FIO extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div className = {style.main}>
        <HelpText/>
        <InputFIO/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(FIO);