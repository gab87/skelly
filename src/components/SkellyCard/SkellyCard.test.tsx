import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyCard } from './SkellyCard';

describe('SkellyCard', () => {
  it('renders with default props', () => {
    render(<SkellyCard />);
    const card = screen.getByTestId('skelly-card');
    expect(card).toBeInTheDocument();
  });

  it('renders image and 3 text lines', () => {
    render(<SkellyCard />);
    const image = screen.getByTestId('skelly-card-image');
    const textLines = screen.getAllByTestId('skelly-card-text');
    expect(image).toBeInTheDocument();
    expect(textLines).toHaveLength(3);
  });

  it('applies custom background to all sub-elements', () => {
    render(<SkellyCard background="#ff0000" />);
    const image = screen.getByTestId('skelly-card-image');
    const textLines = screen.getAllByTestId('skelly-card-text');
    expect(image.style.background).toBe('rgb(255, 0, 0)');
    textLines.forEach((line) => {
      expect(line.style.background).toBe('rgb(255, 0, 0)');
    });
  });

  it('color overrides background for all sub-elements', () => {
    render(<SkellyCard background="#ff0000" color="#00ff00" />);
    const image = screen.getByTestId('skelly-card-image');
    expect(image.style.background).toBe('rgb(0, 255, 0)');
  });

  it('applies animation class to sub-elements', () => {
    render(<SkellyCard animation="shiny" />);
    const image = screen.getByTestId('skelly-card-image');
    const textLines = screen.getAllByTestId('skelly-card-text');
    expect(image.className).toContain('shiny');
    textLines.forEach((line) => {
      expect(line.className).toContain('shiny');
    });
  });

});
