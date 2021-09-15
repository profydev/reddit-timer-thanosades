import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function setup() {
  return render(<App />, { wrapper: MemoryRouter });
}


describe('Header', () => {
  beforeEach(() => { setup(); });

  test('Has a link called "How it works" that links to the home page', () => {
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('Has a link called "Search" that leads to the search page', () => {
    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);

    expect(screen.getByText(/search page/i)).toBeInTheDocument();
  })
  
});
