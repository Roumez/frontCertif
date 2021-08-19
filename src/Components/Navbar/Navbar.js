import React, {useState, useEffect} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState (window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth=() => {
      setLargeur(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 900) && (
        <ul className="liste">
          <Link to='/'>
        <li className="items">Marketplace</li>
          </Link>
          <Link to='dashboard'>
        <li className="items">Dashboard</li>
          </Link>
          <Link to='creatorplace'>
        <li className="items">Creatorplace</li>
          </Link>
      </ul>
        )}
      <button onClick={toggleNav} className="btn">Menu</button>
      <button className="login">LOG IN</button>
    </nav>
  );
};

export default Navbar;
