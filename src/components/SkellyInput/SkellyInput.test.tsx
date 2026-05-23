import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyInput } from './SkellyInput';

describe('SkellyInput', () => {
  it('renders with default props', () => {
    render(<SkellyInput />);
    const el = screen.getByTestId('skelly-input');
    expect(el).toBeInTheDocument();
  });

  it('applies custom background', () => {
    render(<SkellyInput background="#ff0000" />);
    const el = screen.getByTestId('skelly-input');
    expect(el.style.background).toBe('rgb(255, 0, 0)');
  });

  it('applies shiny animation class', () => {
    render(<SkellyInput animation="shiny" />);
    const el = screen.getByTestId('skelly-input');
    expect(el.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyInput animation="none" />);
    const el = screen.getByTestId('skelly-input');
    expect(el.className).not.toContain('shiny');
    expect(el.className).not.toContain('flicker');
  });
});
