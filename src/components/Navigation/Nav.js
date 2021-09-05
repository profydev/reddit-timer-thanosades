import React from 'react';
import HorizontalList from './HorizontalList';

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li>Search</li>
        <li><a href="#how-it-works">How it works</a></li>
        <li>About</li>
      </HorizontalList>
    </nav>
  );
}
