import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Logo from './Logo';

export default function Navigation() {
  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
    </>
  );
}
