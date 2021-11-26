import React from "react";

import store from '../../../../../../store/store.jsx';
import { connect } from "react-redux";

import Header from "./Header/Header.jsx";
import InputFio from "./InputFio/InputFio.jsx";;

class FioInput extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
          <Header/>
          <InputFio/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(FioInput);