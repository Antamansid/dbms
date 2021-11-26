import React from "react";
import store from '../store/store.jsx';
import { connect } from "react-redux";

import {Switch, Route} from 'react-router-dom';

import SearchPage from "./SearchPage/SearchPage.jsx";
import AddNewCardPage from "./AddNewCardPage/AddNewCardPage.jsx";

import styles from './style.css';

class Page extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <main className = {styles.block}>
        <Switch>
          <Route exact path='/' component={SearchPage}/>
          <Route exact path='/newUser' component={AddNewCardPage}/>
        </Switch>
      </main>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect(mapStateToProps)(Page);