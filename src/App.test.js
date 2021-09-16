import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Header', () => {
  test('Has a link called "How it works" that links to the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('Has a link called "About" that links to the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /about/i });
    userEvent.click(link);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('Has a logo that links to the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const logo = screen.getByText(/logo\.svg/i);
    userEvent.click(logo);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('Has a link called "Search" that leads to the search page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);

    expect(screen.getByText(/search page/i)).toBeInTheDocument();
  });
});
