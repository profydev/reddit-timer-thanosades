import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function LogoComponent() {
  return (
    <Link to="/">
      <Logo />
    </Link>
  );
}
