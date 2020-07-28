import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Header.css';
import Button from '../Button';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Devflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Header;