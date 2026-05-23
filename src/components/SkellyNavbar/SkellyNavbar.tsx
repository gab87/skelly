import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyNavbar.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';
const LINK_COUNT = 3;

/**
 * SkellyNavbar renders a horizontal navigation bar placeholder with logo and links.
 * @param props - SkellyProps for customization
 * @returns A skeleton navbar element
 */
export function SkellyNavbar({
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
    <div className={styles.navbar} data-testid="skelly-navbar">
      <div
        className={`${styles.logo} ${animationClass}`.trim()}
        style={baseStyle}
        data-testid="skelly-navbar-logo"
      />
      <div className={styles.links}>
        {Array.from({ length: LINK_COUNT }, (_, i) => (
          <div
            key={i}
            className={`${styles.link} ${animationClass}`.trim()}
            style={baseStyle}
            data-testid="skelly-navbar-link"
          />
        ))}
      </div>
    </div>
  );
}
