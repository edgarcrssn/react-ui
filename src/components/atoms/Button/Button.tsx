import React from 'react';
import 'styles/globals.scss';
import './Button.scss';

type Props = {
  color: 'primary' | 'secondary';
};

const Button = ({ color }: Props) => {
  return <button className="button">Button</button>;
};

export default Button;
