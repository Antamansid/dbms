import React from "react";

import store from '../../../../../../store/store.jsx';
import { connect } from "react-redux";

import Header from "./Header/Header.jsx";
import WorkPlace from "./WorkPlace/WorkPlace.jsx";

class EndDate extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
        <Header/>
        <WorkPlace/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(EndDate);