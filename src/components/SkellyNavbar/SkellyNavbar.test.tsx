import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyNavbar } from './SkellyNavbar';

describe('SkellyNavbar', () => {
  it('renders with default props', () => {
    render(<SkellyNavbar />);
    const el = screen.getByTestId('skelly-navbar');
    expect(el).toBeInTheDocument();
  });

  it('renders logo and 3 links', () => {
    render(<SkellyNavbar />);
    const logo = screen.getByTestId('skelly-navbar-logo');
    const links = screen.getAllByTestId('skelly-navbar-link');
    expect(logo).toBeInTheDocument();
    expect(links).toHaveLength(3);
  });

  it('applies shiny animation class', () => {
    render(<SkellyNavbar animation="shiny" />);
    const logo = screen.getByTestId('skelly-navbar-logo');
    expect(logo.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyNavbar animation="none" />);
    const logo = screen.getByTestId('skelly-navbar-logo');
    expect(logo.className).not.toContain('shiny');
    expect(logo.className).not.toContain('flicker');
  });
});
