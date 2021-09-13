import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HorizontalList from './HorizontalList';

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li><Link to="/search">Search</Link></li>
        <li><HashLink to="#how-it-works">How it works</HashLink></li>
        <li><HashLink href="#about">About</HashLink></li>
      </HorizontalList>
    </nav>
  );
}
