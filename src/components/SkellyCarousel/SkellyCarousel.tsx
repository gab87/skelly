import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyCarousel.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const DOT_COUNT = 3;

/**
 * SkellyCarousel renders a slider placeholder with a slide area, arrows, and dots.
 * @param props - SkellyProps for customization
 * @returns A skeleton carousel element
 */
export function SkellyCarousel({
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
    <div className={styles.carousel} data-testid="skelly-carousel">
      <div className={styles.main}>
        <div
          className={`${styles.arrow} ${animationClass}`.trim()}
          style={baseStyle}
          data-testid="skelly-carousel-arrow"
        />
        <div
          className={`${styles.slide} ${animationClass}`.trim()}
          style={baseStyle}
          data-testid="skelly-carousel-slide"
        />
        <div
          className={`${styles.arrow} ${animationClass}`.trim()}
          style={baseStyle}
          data-testid="skelly-carousel-arrow"
        />
      </div>
      <div className={styles.dots}>
        {Array.from({ length: DOT_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-carousel-dot"
          />
        ))}
      </div>
    </div>
  );
}
