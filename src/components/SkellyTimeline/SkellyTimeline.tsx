import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyTimeline.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const NODE_COUNT = 3;
const LINES_PER_NODE = 2;

/**
 * SkellyTimeline renders a vertical timeline placeholder with nodes and text.
 * @param props - SkellyProps for customization
 * @returns A skeleton timeline element
 */
export function SkellyTimeline({
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
    <div className={styles.timeline} data-testid="skelly-timeline">
      <div className={styles.line} style={baseStyle} data-testid="skelly-timeline-line" />
      {Array.from({ length: NODE_COUNT }, (_, i) => (
        <div key={i} className={styles.node} data-testid="skelly-timeline-node">
          <div
            className={`${styles.dot} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-timeline-dot"
          />
          <div className={styles.nodeContent}>
            {Array.from({ length: LINES_PER_NODE }, (_, j) => (
              <div
                key={j}
                className={`${styles.nodeLine} ${animationClass}`.trim()}
                style={baseStyle}
                data-testid="skelly-timeline-text"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
