import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyImage } from './SkellyImage';

describe('SkellyImage', () => {
  it('renders with default props', () => {
    render(<SkellyImage />);
    const el = screen.getByTestId('skelly-image');
    expect(el).toBeInTheDocument();
  });

  it('applies custom background', () => {
    render(<SkellyImage background="#ff0000" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.style.background).toBe('rgb(255, 0, 0)');
  });

  it('color overrides background', () => {
    render(<SkellyImage background="#ff0000" color="#00ff00" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.style.background).toBe('rgb(0, 255, 0)');
  });

  it('applies custom border', () => {
    render(<SkellyImage border="1px dashed blue" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.style.border).toBe('1px dashed blue');
  });

  it('applies shiny animation class', () => {
    render(<SkellyImage animation="shiny" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.className).toContain('shiny');
  });

  it('applies flicker animation class', () => {
    render(<SkellyImage animation="flicker" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.className).toContain('flicker');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyImage animation="none" />);
    const el = screen.getByTestId('skelly-image');
    expect(el.className).not.toContain('shiny');
    expect(el.className).not.toContain('flicker');
  });
});
