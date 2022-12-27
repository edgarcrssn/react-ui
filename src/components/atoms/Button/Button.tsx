import React from 'react';
import 'styles/globals.scss';
import './Button.scss';

type Props = {
  color: 'primary' | 'secondary';
};

const Button = ({ color = 'primary' }: Props) => {
  return <button className={`button button--${color}`}>Button</button>;
};

export default Button;
