import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyChart.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const BAR_HEIGHTS = ['30%', '60%', '90%', '45%', '75%'];

/**
 * SkellyChart renders a bar chart placeholder with vertical bars of varying heights.
 * @param props - SkellyProps for customization
 * @returns A skeleton chart element
 */
export function SkellyChart({
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
    <div className={styles.chart} data-testid="skelly-chart">
      <div className={styles.bars}>
        {BAR_HEIGHTS.map((height, i) => (
          <div
            key={i}
            className={`${styles.bar} ${animationClass}`.trim()}
            style={{ ...baseStyle, height }}
            data-testid="skelly-chart-bar"
          />
        ))}
      </div>
      <div
        className={styles.baseline}
        style={baseStyle}
        data-testid="skelly-chart-baseline"
      />
    </div>
  );
}
