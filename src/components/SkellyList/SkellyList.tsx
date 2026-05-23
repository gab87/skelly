import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyList.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const ROW_COUNT = 3;
const LINES_PER_ROW = 2;

/**
 * SkellyList renders a list placeholder with avatar circles and text lines per row.
 * @param props - SkellyProps for customization
 * @returns A skeleton list element
 */
export function SkellyList({
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
    <div className={styles.list} data-testid="skelly-list">
      {Array.from({ length: ROW_COUNT }, (_, i) => (
        <div key={i} className={styles.row} data-testid="skelly-list-row">
          <div
            className={`${styles.rowAvatar} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-list-avatar"
          />
          <div className={styles.rowLines}>
            {Array.from({ length: LINES_PER_ROW }, (_, j) => (
              <div
                key={j}
                className={`${styles.rowLine} ${animationClass}`.trim()}
                style={baseStyle}
                data-testid="skelly-list-line"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
