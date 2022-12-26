/// <reference types="react" />
import './Button.scss';
type Props = {
    color: 'primary' | 'secondary';
};
declare const Button: ({ color }: Props) => JSX.Element;
export default Button;
