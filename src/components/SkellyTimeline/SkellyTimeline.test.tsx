import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyTimeline } from './SkellyTimeline';

describe('SkellyTimeline', () => {
  it('renders with default props', () => {
    render(<SkellyTimeline />);
    const el = screen.getByTestId('skelly-timeline');
    expect(el).toBeInTheDocument();
  });

  it('renders line, 3 nodes with dots and text', () => {
    render(<SkellyTimeline />);
    const line = screen.getByTestId('skelly-timeline-line');
    const nodes = screen.getAllByTestId('skelly-timeline-node');
    const dots = screen.getAllByTestId('skelly-timeline-dot');
    const texts = screen.getAllByTestId('skelly-timeline-text');
    expect(line).toBeInTheDocument();
    expect(nodes).toHaveLength(3);
    expect(dots).toHaveLength(3);
    expect(texts).toHaveLength(6);
  });

  it('applies shiny animation class', () => {
    render(<SkellyTimeline animation="shiny" />);
    const dots = screen.getAllByTestId('skelly-timeline-dot');
    expect(dots[0].className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyTimeline animation="none" />);
    const dots = screen.getAllByTestId('skelly-timeline-dot');
    expect(dots[0].className).not.toContain('shiny');
    expect(dots[0].className).not.toContain('flicker');
  });
});
