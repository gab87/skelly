import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyButton } from './SkellyButton';

describe('SkellyButton', () => {
  it('renders with default props', () => {
    render(<SkellyButton />);
    const el = screen.getByTestId('skelly-button');
    expect(el).toBeInTheDocument();
  });

  it('applies custom background', () => {
    render(<SkellyButton background="#ff0000" />);
    const el = screen.getByTestId('skelly-button');
    expect(el.style.background).toBe('rgb(255, 0, 0)');
  });

  it('color overrides background', () => {
    render(<SkellyButton background="#ff0000" color="#00ff00" />);
    const el = screen.getByTestId('skelly-button');
    expect(el.style.background).toBe('rgb(0, 255, 0)');
  });

  it('applies shiny animation class', () => {
    render(<SkellyButton animation="shiny" />);
    const el = screen.getByTestId('skelly-button');
    expect(el.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyButton animation="none" />);
    const el = screen.getByTestId('skelly-button');
    expect(el.className).not.toContain('shiny');
    expect(el.className).not.toContain('flicker');
  });
});
