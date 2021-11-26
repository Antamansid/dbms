import React from "react";

import store from '../../../store/store.jsx';
import { connect } from "react-redux";

import Adress from './Adress/Adress.jsx';
import FIAS from './FIAS/FIAS.jsx';
import FIO from './FIO/FIO.jsx';
import Telephone from './Telephone/Telephone.jsx';

import styles from './style.css'

class InputTemplates extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
        <FIO/>
        <Telephone/>
        <Adress/>
        <FIAS/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(InputTemplates);