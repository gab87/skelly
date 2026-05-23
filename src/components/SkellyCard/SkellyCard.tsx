import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyCard.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const TEXT_LINES_COUNT = 3;

/**
 * SkellyCard renders a square grey placeholder with text line rectangles below it.
 * @param props - SkellyProps for customization
 * @returns A skeleton card element with image and text lines
 */
export function SkellyCard({
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
    <div className={styles.card} data-testid="skelly-card">
      <div
        className={`${styles.cardImage} ${animationClass}`.trim()}
        style={baseStyle}
        data-testid="skelly-card-image"
      />
      {Array.from({ length: TEXT_LINES_COUNT }, (_, i) => (
        <div
          key={i}
          className={`${styles.textLine} ${animationClass}`.trim()}
          style={baseStyle}
          data-testid="skelly-card-text"
        />
      ))}
    </div>
  );
}
