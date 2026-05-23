import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyTable.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const COLUMN_COUNT = 4;
const DATA_ROW_COUNT = 3;

/**
 * SkellyTable renders a table placeholder with header and data rows.
 * @param props - SkellyProps for customization
 * @returns A skeleton table element
 */
export function SkellyTable({
  border = 'none',
  background = DEFAULT_BACKGROUND,
  color,
  animation = 'none',
  speed = 1500,
}: SkellyProps): React.ReactElement {
  const animationClass = animation !== 'none' ? animationStyles[animation] : '';

  const baseStyle: React.CSSProperties = {
    border,
    background: color ?? background,
    ...(animation === 'shiny' || animation === 'flicker'
      ? { '--skelly-speed': `${speed}ms` } as React.CSSProperties
      : {}),
  };

  return (
    <div className={styles.table} data-testid="skelly-table">
      <div className={styles.row} data-testid="skelly-table-header">
        {Array.from({ length: COLUMN_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.headerCell} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-table-header-cell"
          />
        ))}
      </div>
      {Array.from({ length: DATA_ROW_COUNT }, (_, i) => (
        <div key={i} className={styles.row} data-testid="skelly-table-row">
          {Array.from({ length: COLUMN_COUNT }, (_, j) => (
            <div
              key={j}
              className={`${styles.cell} ${animationClass}`.trim()}
              style={baseStyle}
              data-testid="skelly-table-cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
