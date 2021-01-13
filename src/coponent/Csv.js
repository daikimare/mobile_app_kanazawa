import axios from 'axios';
import React, { Component } from 'react';
// import CSVReader from 'react-csv-reader';
import './css/csv.css';

const URL = "https://infra-api.city.kanazawa.ishikawa.jp/v1/facilities/search.json";
const URL2 = "https://infra-api.city.kanazawa.ishikawa.jp/v1/facilities/:id.json";

class Csv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:[],
      isLoading:true
    };
    this.getData = this.getData.bind(this);
  }
  
  getData = async() => {
    try {
      const response = await axios.get(
        URL
      );
      console.log(response);
    } catch (err) {
      console.log("API取得できませんでした");
    }
  }

  getMoreData = async() => {
    try {
      const response = await axios.get(
        URL2
      );
      console.log(response);
    } catch (err) {
      console.log("情報の取得に失敗しました");
    }
  }

  render(){
    const columns =[
      {title:'name'}
    ]
    return(
      <div className="csv">
        <div className="page-contents">
          <h1 className="csv-app">CSVの表示</h1>
          <table
          title="観光地"
          columns={columns}
          data={this.state.info}
          isLoading={this.state.isLoading}
          />
          <br />
          <div className="API_information">
            <input type="text" className="location"></input>
            <button variant="contained" color="primary" onClick={this.getMoreData}>info</button>
            <br />
            <button onClick={this.getData}>APIの取得</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Csv;