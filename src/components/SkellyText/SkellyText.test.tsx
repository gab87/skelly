import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyText } from './SkellyText';

describe('SkellyText', () => {
  it('renders with default props', () => {
    render(<SkellyText />);
    const el = screen.getByTestId('skelly-text');
    expect(el).toBeInTheDocument();
  });

  it('renders 4 text lines', () => {
    render(<SkellyText />);
    const lines = screen.getAllByTestId('skelly-text-line');
    expect(lines).toHaveLength(4);
  });

  it('applies custom background to lines', () => {
    render(<SkellyText background="#ff0000" />);
    const lines = screen.getAllByTestId('skelly-text-line');
    expect(lines[0].style.background).toBe('rgb(255, 0, 0)');
  });

  it('color overrides background', () => {
    render(<SkellyText background="#ff0000" color="#00ff00" />);
    const lines = screen.getAllByTestId('skelly-text-line');
    expect(lines[0].style.background).toBe('rgb(0, 255, 0)');
  });

  it('applies shiny animation class', () => {
    render(<SkellyText animation="shiny" />);
    const lines = screen.getAllByTestId('skelly-text-line');
    expect(lines[0].className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyText animation="none" />);
    const lines = screen.getAllByTestId('skelly-text-line');
    expect(lines[0].className).not.toContain('shiny');
    expect(lines[0].className).not.toContain('flicker');
  });
});
