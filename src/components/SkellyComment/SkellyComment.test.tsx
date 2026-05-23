import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyComment } from './SkellyComment';

describe('SkellyComment', () => {
  it('renders with default props', () => {
    render(<SkellyComment />);
    const el = screen.getByTestId('skelly-comment');
    expect(el).toBeInTheDocument();
  });

  it('renders avatar and bubble lines', () => {
    render(<SkellyComment />);
    const avatar = screen.getByTestId('skelly-comment-avatar');
    const lines = screen.getAllByTestId('skelly-comment-line');
    expect(avatar).toBeInTheDocument();
    expect(lines).toHaveLength(3);
  });

  it('applies shiny animation class', () => {
    render(<SkellyComment animation="shiny" />);
    const avatar = screen.getByTestId('skelly-comment-avatar');
    expect(avatar.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyComment animation="none" />);
    const avatar = screen.getByTestId('skelly-comment-avatar');
    expect(avatar.className).not.toContain('shiny');
    expect(avatar.className).not.toContain('flicker');
  });
});
