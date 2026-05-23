import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyText.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const TEXT_LINES_COUNT = 4;

/**
 * SkellyText renders a paragraph-like placeholder with lines of decreasing width.
 * @param props - SkellyProps for customization
 * @returns A skeleton text block element
 */
export function SkellyText({
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
    <div className={styles.text} data-testid="skelly-text">
      {Array.from({ length: TEXT_LINES_COUNT }, (_, i) => (
        <div
          key={i}
          className={`${styles.line} ${animationClass}`.trim()}
          style={baseStyle}
          data-testid="skelly-text-line"
        />
      ))}
    </div>
  );
}
