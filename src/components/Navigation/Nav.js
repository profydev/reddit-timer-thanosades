import React from 'react';
import HorizontalList from './HorizontalList';

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li>Search</li>
        <li>How it works</li>
        <li>About</li>
      </HorizontalList>
    </nav>
  );
}
