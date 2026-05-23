import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyProfile } from './SkellyProfile';

describe('SkellyProfile', () => {
  it('renders with default props', () => {
    render(<SkellyProfile />);
    const el = screen.getByTestId('skelly-profile');
    expect(el).toBeInTheDocument();
  });

  it('renders avatar, name, bio lines, and stats', () => {
    render(<SkellyProfile />);
    const avatar = screen.getByTestId('skelly-profile-avatar');
    const name = screen.getByTestId('skelly-profile-name');
    const bioLines = screen.getAllByTestId('skelly-profile-bio');
    const stats = screen.getAllByTestId('skelly-profile-stat');
    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(bioLines).toHaveLength(2);
    expect(stats).toHaveLength(3);
  });

  it('applies shiny animation class', () => {
    render(<SkellyProfile animation="shiny" />);
    const avatar = screen.getByTestId('skelly-profile-avatar');
    expect(avatar.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyProfile animation="none" />);
    const avatar = screen.getByTestId('skelly-profile-avatar');
    expect(avatar.className).not.toContain('shiny');
    expect(avatar.className).not.toContain('flicker');
  });
});
