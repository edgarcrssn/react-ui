import React, { useState } from 'react';
import type { FunctionComponent } from 'react';
import 'styles/globals.scss';
import './Input.scss';
import { capitalize } from 'utils/capitalize';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

type Props = {
  label?: string;
  direction?: 'row' | 'column';
  type?: 'text' | 'number' | 'email' | 'tel' | 'url' | 'search' | 'password';
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  min?: number;
  max?: number;
  minlength?: number;
  maxlength?: number;
  regEx?: {
    pattern: string;
    message: string;
  };
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  autocomplete?: boolean;
};

/**
 * Simply an input
 *
 * @component
 * @example
 * ```jsx
 * <Input />
 * ```
 */
const Input: FunctionComponent<Props> = ({
  label,
  direction = 'column',
  type = 'text',
  placeholder = ' ',
  id,
  name,
  value = '',
  setValue,
  required = true,
  min,
  max,
  minlength,
  maxlength,
  regEx,
  disabled = false,
  readonly = false,
  autofocus = false,
  autocomplete = true,
}) => {
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);

  const displayPasswordIcon = displayPassword ? (
    <EyeInvisibleOutlined />
  ) : (
    <EyeOutlined />
  );

  const isValidationRequired: boolean =
    type === 'email' ||
    type === 'tel' ||
    type === 'url' ||
    typeof minlength != 'undefined' ||
    typeof maxlength != 'undefined' ||
    typeof regEx != 'undefined';

  const formatInput = (value: string): string => {
    switch (type) {
      case 'tel':
        return value.match(/[0-9]{1,2}/g)?.join(' ') || value;
      default:
        return value;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue ? setValue(formatInput(e.target.value)) : null;

  const getPatternByType = () => {
    switch (type) {
      // case 'email':
      case 'tel':
        return '^(?:[0-9]{2} ){4}[0-9]{2}$';
      case 'url':
        break;
      default:
        return undefined;
    }
  };
  const getMessageByType = () => {
    switch (type) {
      // case 'email':
      case 'tel':
        return '10 chiffres, séparés par 2 par un espace (ex : 06 07 08 09 10)';
      case 'url':
        break;
      default:
        return undefined;
    }
  };

  return (
    <div
      className={`input ${disabled ? 'input--disabled' : ''}`}
      style={
        direction === 'row'
          ? { flexDirection: 'row', alignItems: 'center' }
          : undefined
      }
    >
      {label ? (
        <label className="label" htmlFor={id || label}>
          {capitalize(label)}
        </label>
      ) : null}
      <div className="input-container">
        <input
          className={`input ${
            isValidationRequired ? 'input--require-validation' : ''
          }`}
          type={
            type === 'password' ? (displayPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          id={id || label}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          required={required}
          min={min}
          max={max}
          minLength={minlength}
          maxLength={maxlength}
          pattern={regEx?.pattern || getPatternByType()}
          title={regEx?.message || getMessageByType()}
          disabled={disabled}
          readOnly={readonly}
          autoFocus={autofocus}
          autoComplete={autocomplete ? 'on' : 'off'}
        />
        {type === 'password' ? (
          <button
            className="display-password-button"
            onClick={() => setDisplayPassword((prev) => !prev)}
          >
            {displayPasswordIcon}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
