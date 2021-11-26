import React from "react";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";
import ButtonSearch from "./ButtonSearch/ButtonSearch.jsx";
import InputTemplates from "./InputTemplates/InputTemplates.jsx";

class Form extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
          <InputTemplates/>
          <ButtonSearch/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(Form);