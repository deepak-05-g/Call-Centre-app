import React from 'react';

/**
 * Reusable Card component matching the On-Ground.ai design system
 * @param {boolean} interactive - hover elevation
 * @param {React.ReactNode} title - header title
 * @param {React.ReactNode} headerAction - header action element
 * @param {React.ReactNode} children - card content
 */
export default function Card({
  interactive = false,
  title = null,
  headerAction = null,
  className = '',
  style = {},
  children,
  onClick,
  ...props
}) {
  return (
    <div
      className={`og-card ${interactive ? 'og-card-interactive' : ''} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {(title || headerAction) && (
        <div className="og-card-header">
          {title && <div className="og-card-title">{title}</div>}
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="og-card-body">{children}</div>
    </div>
  );
}
