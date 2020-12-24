import axios from 'axios';
import React, { Component } from 'react';
// import CSVReader from 'react-csv-reader';
import './css/csv.css';

class Csv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:[],
      isLoading:true
    };
    this.getData = this.getData.bind(this);
  }
  getData(){
    const url = 'https://infra-api.city.kanazawa.ishikawa.jp/v1/facilities';
    axios.get(url).then(res => {
      const data = res.data.facilities;
      console.log(res.data);
      this.setState({
        info:data,
        isLoading:false
      });
    });
  }

  render(){
    const columns =[
      {title:'name'}
    ]
    return(
      <div className="csv">
        <h1 className="csv-app">CSVの表示</h1>
        <table
        title="観光地"
        columns={columns}
        data={this.state.info}
        isLoading={this.state.isLoading}
        />
        <button variant="contained" color="primary" onClick={this.getData}>info</button>
      </div>
    );
  }
}
export default Csv;