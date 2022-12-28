import React, { ReactNode } from 'react';
import 'styles/globals.scss';
import './Button.scss';

type Props = {
  color:
    | 'primary'
    | 'secondary'
    | 'check'
    | 'warning'
    | 'alert'
    | 'info'
    | 'gold';
  icon?: ReactNode;
  children: string;
};

const Button = ({ color = 'primary', icon, children }: Props) => {
  return (
    <button className={`button button--${color}`}>
      {icon ? <div className="button__icon-container">{icon}</div> : null}
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
