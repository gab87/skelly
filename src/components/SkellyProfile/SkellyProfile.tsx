import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyProfile.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const BIO_LINES_COUNT = 2;
const STATS_COUNT = 3;

/**
 * SkellyProfile renders a social profile placeholder with avatar, name, bio, and stats.
 * @param props - SkellyProps for customization
 * @returns A skeleton profile element
 */
export function SkellyProfile({
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
    <div className={styles.profile} data-testid="skelly-profile">
      <div
        className={`${styles.avatar} ${animationClass}`.trim()}
        style={baseStyle}
        data-testid="skelly-profile-avatar"
      />
      <div
        className={`${styles.name} ${animationClass}`.trim()}
        style={baseStyle}
        data-testid="skelly-profile-name"
      />
      <div className={styles.bio}>
        {Array.from({ length: BIO_LINES_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.bioLine} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-profile-bio"
          />
        ))}
      </div>
      <div className={styles.stats}>
        {Array.from({ length: STATS_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.stat} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-profile-stat"
          />
        ))}
      </div>
    </div>
  );
}
