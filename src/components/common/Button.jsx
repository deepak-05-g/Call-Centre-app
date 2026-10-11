import React from 'react';

/**
 * Reusable Button component matching the On-Ground.ai design system
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'danger' | 'whatsapp'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} pill - rounded pill style
 * @param {React.ReactNode} icon - leading icon
 * @param {React.ReactNode} children - button text
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  icon = null,
  className = '',
  children,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const sizeClass = size === 'sm' ? 'og-btn-sm' : size === 'lg' ? 'og-btn-lg' : '';
  const pillClass = pill ? 'og-btn-pill' : '';

  return (
    <button
      type={type}
      className={`og-btn og-btn-${variant} ${sizeClass} ${pillClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="og-btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
