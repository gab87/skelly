import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkellyTable } from './SkellyTable';

describe('SkellyTable', () => {
  it('renders with default props', () => {
    render(<SkellyTable />);
    const el = screen.getByTestId('skelly-table');
    expect(el).toBeInTheDocument();
  });

  it('renders header and data rows', () => {
    render(<SkellyTable />);
    const headerCells = screen.getAllByTestId('skelly-table-header-cell');
    const dataCells = screen.getAllByTestId('skelly-table-cell');
    const dataRows = screen.getAllByTestId('skelly-table-row');
    expect(headerCells).toHaveLength(4);
    expect(dataRows).toHaveLength(3);
    expect(dataCells).toHaveLength(12);
  });

  it('applies shiny animation class', () => {
    render(<SkellyTable animation="shiny" />);
    const cells = screen.getAllByTestId('skelly-table-cell');
    expect(cells[0].className).toContain('shiny');
  });

  it('does not apply animation class when none', () => {
    render(<SkellyTable animation="none" />);
    const cells = screen.getAllByTestId('skelly-table-cell');
    expect(cells[0].className).not.toContain('shiny');
    expect(cells[0].className).not.toContain('flicker');
  });
});
