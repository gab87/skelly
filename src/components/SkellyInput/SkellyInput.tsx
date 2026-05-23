import React from 'react';
import { SkellyProps } from '../../types';
import styles from './SkellyInput.module.css';
import animationStyles from '../../animations/Animations.module.css';

const DEFAULT_BACKGROUND = '#e0e0e0';

/**
 * SkellyInput renders a rounded rectangle placeholder simulating an input field.
 * @param props - SkellyProps for customization
 * @returns A skeleton input element
 */
export function SkellyInput({
  border = 'none',
  background = DEFAULT_BACKGROUND,
  color,
  animation = 'none',
  speed = 1500,
}: SkellyProps): React.ReactElement {
  const animationClass = animation !== 'none' ? animationStyles[animation] : '';

  const style: React.CSSProperties = {
    border,
    background: color ?? background,
    ...(animation === 'shiny' || animation === 'flicker'
      ? { '--skelly-speed': `${speed}ms` } as React.CSSProperties
      : {}),
  };

  return (
    <div
      className={`${styles.input} ${animationClass}`.trim()}
      style={style}
      data-testid="skelly-input"
    />
  );
}
