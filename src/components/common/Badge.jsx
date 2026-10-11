import React from 'react';

/**
 * Reusable Badge component matching the On-Ground.ai design system
 * @param {string} variant - 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'neutral' | 'live'
 * @param {boolean} isLive - whether to show live pulsing dot
 * @param {React.ReactNode} children - badge label
 */
export default function Badge({
  variant = 'neutral',
  isLive = false,
  className = '',
  style = {},
  children,
  ...props
}) {
  return (
    <span
      className={`og-badge og-badge-${variant} ${className}`}
      style={style}
      {...props}
    >
      {isLive && <span className="og-live-dot" />}
      {children}
    </span>
  );
}
