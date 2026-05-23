import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyList } from './SkellyList';

describe('SkellyList', () => {
  it('renders with default props', () => {
    render(<SkellyList />);
    const el = screen.getByTestId('skelly-list');
    expect(el).toBeInTheDocument();
  });

  it('renders 3 rows with avatars and lines', () => {
    render(<SkellyList />);
    const rows = screen.getAllByTestId('skelly-list-row');
    const avatars = screen.getAllByTestId('skelly-list-avatar');
    const lines = screen.getAllByTestId('skelly-list-line');
    expect(rows).toHaveLength(3);
    expect(avatars).toHaveLength(3);
    expect(lines).toHaveLength(6);
  });

  it('applies shiny animation class', () => {
    render(<SkellyList animation="shiny" />);
    const avatars = screen.getAllByTestId('skelly-list-avatar');
    expect(avatars[0].className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyList animation="none" />);
    const avatars = screen.getAllByTestId('skelly-list-avatar');
    expect(avatars[0].className).not.toContain('shiny');
    expect(avatars[0].className).not.toContain('flicker');
  });
});
