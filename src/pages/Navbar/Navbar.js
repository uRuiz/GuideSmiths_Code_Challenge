import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link className="navbar-brand"  to="/">GuideSmiths</Link>
    </nav>
  )
}
