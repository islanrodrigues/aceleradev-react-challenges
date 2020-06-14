import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <div className="topbar__logo">
        <Link to="/">
          <LogoSvg alt="Instagram Logo"/>
        </Link>
      </div>

      <nav className="topbar__group">
        <div className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users" />
            <span>Usuários</span>
          </Link>
        </div>
        <div className="topbar__icon">
          <Link to="/newUser">
            <i className="fas fa-user-plus" />
            <span>Nova Conta</span>
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Topbar;
