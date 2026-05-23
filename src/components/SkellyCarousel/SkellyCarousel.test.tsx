import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyCarousel } from './SkellyCarousel';

describe('SkellyCarousel', () => {
  it('renders with default props', () => {
    render(<SkellyCarousel />);
    const el = screen.getByTestId('skelly-carousel');
    expect(el).toBeInTheDocument();
  });

  it('renders slide, 2 arrows, and 3 dots', () => {
    render(<SkellyCarousel />);
    const slide = screen.getByTestId('skelly-carousel-slide');
    const arrows = screen.getAllByTestId('skelly-carousel-arrow');
    const dots = screen.getAllByTestId('skelly-carousel-dot');
    expect(slide).toBeInTheDocument();
    expect(arrows).toHaveLength(2);
    expect(dots).toHaveLength(3);
  });

  it('applies shiny animation class', () => {
    render(<SkellyCarousel animation="shiny" />);
    const slide = screen.getByTestId('skelly-carousel-slide');
    expect(slide.className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyCarousel animation="none" />);
    const slide = screen.getByTestId('skelly-carousel-slide');
    expect(slide.className).not.toContain('shiny');
    expect(slide.className).not.toContain('flicker');
  });
});
