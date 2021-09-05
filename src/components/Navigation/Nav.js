import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalList from './HorizontalList';

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li><Link to="/search/javascript">Search</Link></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#about">About</a></li>
      </HorizontalList>
    </nav>
  );
}
