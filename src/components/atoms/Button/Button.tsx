import React from 'react';
import './Button.scss';

type Props = {
  color: 'primary' | 'secondary';
};

const Button = ({ color }: Props) => {
  return <button className="button">Button</button>;
};

export default Button;
