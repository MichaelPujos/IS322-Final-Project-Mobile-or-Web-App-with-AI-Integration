import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p5-navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "p5-navlink active" : "p5-navlink"}>
        Home
      </NavLink>
      <NavLink to="/ask" className={({ isActive }) => isActive ? "p5-navlink active" : "p5-navlink"}>
        Ask AI
      </NavLink>
      <NavLink to="/saved" className={({ isActive }) => isActive ? "p5-navlink active" : "p5-navlink"}>
        Saved
      </NavLink>
    </nav>
  );
};

export default Navbar;
