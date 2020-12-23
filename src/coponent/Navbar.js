import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <h1 className="ptitle">binoculars</h1>
        <ul className="list">
          <li><Link to='/'>HomePage</Link></li>
          <li><Link to='/Maparea'>GoogleMap</Link></li>
          <li><Link to='/Csv'>金沢市の施設の一覧</Link></li>
        </ul>
      </header>
    );
  }
}
export default Navbar;