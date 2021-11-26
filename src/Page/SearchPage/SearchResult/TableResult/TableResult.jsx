import React from "react";

import moment from "moment";

import store from '../../../../store/store.jsx';
import { connect } from "react-redux";

import Header from "./Header/Header.jsx";
import Row from "./Row/Row.jsx";
import AlertSearch from "./AlertSearch/AlertSearch.jsx";


class TableResult extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.process){
      let elements = this.props.content.map((element, id)=>{
        let date = moment(element.date).format('DD.MM.YYYY');
        return <Row key = {id} createDate = {date} fio = {element.fio} adress = {element.adress} telephone = {element.telephone} id = {element._id}/>
      }) 
      return <div>
        <Header/>
        {elements}
      </div>;
    }
    return <div>
      <Header/>
      <AlertSearch/>
    </div>;
  }
}

function mapStateToProps(store) {
  return {
    process: store.users.TableResult_state.process,
    content : store.users.TableResult_state.content
  }
}

export default connect (mapStateToProps)(TableResult);