import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar';

import sustentalize1 from '../../images/sustentalize1.png';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <img 
        src={sustentalize1} 
        className="App-logo" 
        alt="logo" 
        style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} 
      />

      <SearchBar />

      <Link className="login-name" to="/login">LOGIN</Link>

      <div className="menu">
        <ul className="menu-3" style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
          <li>HOME</li>
          <li>ROUPAS</li>
          <li>CALÇAS</li>
          <li>SAPATOS</li>
          <li>CONTATO</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;