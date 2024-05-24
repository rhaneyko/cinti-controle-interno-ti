import React from 'react';

import './Header.css';


const Header = () => {
  return (
      <header className='header'>
        <div className='logo'>
          MENU
        </div>
        <nav>
          <ul className='nav-links'>
            <li><a href='#home'>LINHAS TELEFONICAS</a></li>
            <li><a href='#skills'>DESKTOP</a></li>
          </ul>
        </nav>
        <div>
          nome do usuario, sair
        </div>
    </header>
  )
}

export default Header;