import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyComment.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const BUBBLE_LINES_COUNT = 3;

/**
 * SkellyComment renders a comment placeholder with avatar and speech bubble text.
 * @param props - SkellyProps for customization
 * @returns A skeleton comment element
 */
export function SkellyComment({
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
    <div className={styles.comment} data-testid="skelly-comment">
      <div
        className={`${styles.avatar} ${animationClass}`.trim()}
        style={baseStyle}
        data-testid="skelly-comment-avatar"
      />
      <div className={styles.bubble}>
        {Array.from({ length: BUBBLE_LINES_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.bubbleLine} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-comment-line"
          />
        ))}
      </div>
    </div>
  );
}
