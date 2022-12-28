import React, { ReactNode } from 'react';
import 'styles/globals.scss';
import './Button.scss';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {
  children: ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'check'
    | 'warning'
    | 'alert'
    | 'info';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  htmlType = 'submit',
  onClick,
}: Props) => {
  return (
    <button
      className={`button button--${color} button--${size}${
        loading ? ' button--loading' : ''
      }`}
      style={fullWidth ? { width: '100%' } : undefined}
      disabled={disabled || loading}
      type={htmlType}
      onClick={onClick}
    >
      <div className="button__body">
        {icon || loading ? (
          <div
            className="button__icon-container"
            style={iconPosition === 'right' ? { order: 2 } : undefined}
          >
            {loading ? <LoadingOutlined /> : icon}
          </div>
        ) : null}
        <span className="button__text">{children}</span>
      </div>
    </button>
  );
};

export default Button;
