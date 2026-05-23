import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyChart } from './SkellyChart';

describe('SkellyChart', () => {
  it('renders with default props', () => {
    render(<SkellyChart />);
    const el = screen.getByTestId('skelly-chart');
    expect(el).toBeInTheDocument();
  });

  it('renders 5 bars and a baseline', () => {
    render(<SkellyChart />);
    const bars = screen.getAllByTestId('skelly-chart-bar');
    const baseline = screen.getByTestId('skelly-chart-baseline');
    expect(bars).toHaveLength(5);
    expect(baseline).toBeInTheDocument();
  });

  it('applies shiny animation class', () => {
    render(<SkellyChart animation="shiny" />);
    const bars = screen.getAllByTestId('skelly-chart-bar');
    expect(bars[0].className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyChart animation="none" />);
    const bars = screen.getAllByTestId('skelly-chart-bar');
    expect(bars[0].className).not.toContain('shiny');
    expect(bars[0].className).not.toContain('flicker');
  });
});
