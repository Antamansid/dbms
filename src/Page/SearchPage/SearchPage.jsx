import React from "react";

import store from '../../store/store.jsx';
import { connect } from "react-redux";

import SearchForm from './SearchForm/SearchForm.jsx';
import SearchResult from "./SearchResult/SearchResult.jsx";

class SearchPage extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
      return <div>
        <SearchForm/>
        <SearchResult/>
      </div>;
  }
}

function mapStateToProps(store) {
  return {
      connected: store.users.Page_State
  }
}

export default connect (mapStateToProps)(SearchPage);