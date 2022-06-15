import React, { ChangeEvent, FocusEvent, ForwardedRef } from 'react';
import cl from 'classnames';

import { ClassName, isDisabled, ID, InputType } from '../../../types';

interface InputFieldProps {
  autoFocus?: boolean;
  className?: ClassName;
  disabled?: isDisabled;
  error?: string | null;
  errorClassName?: ClassName;
  id?: ID;
  inputClassName?: ClassName;
  inputWrapperClassName?: ClassName;
  label?: string;
  labelClassName?: ClassName;
  max?: number;
  min?: number;
  name: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  showError?: boolean;
  step?: number | 'any';
  type?: InputType;
  value?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      autoFocus = false,
      className,
      disabled,
      error,
      errorClassName,
      id,
      inputClassName,
      inputWrapperClassName,
      label,
      labelClassName,
      max,
      min,
      name,
      placeholder,
      onBlur,
      onChange,
      // onKeyPress,
      required,
      showError = true,
      step,
      type = InputType.TEXT,
      value
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        {label ? (
          <label
            htmlFor={id || name}
            className={cl(
              labelClassName ||
                'block text-sm font-medium text-gray-700 dark:text-gray-300'
            )}
          >
            {label}
          </label>
        ) : null}

        <div className={inputWrapperClassName}>
          <input
            autoFocus={autoFocus}
            className={cl(inputClassName || 'basic-input', {
              'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500 dark:border-red-700 dark:placeholder-red-600 dark:bg-gray-800 dark:text-red-500':
                error
            })}
            disabled={disabled}
            id={id || name}
            max={max}
            min={min}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            // onKeyPress={onKeyPress}
            placeholder={placeholder}
            ref={ref}
            required={required}
            step={step}
            type={type}
            value={value}
          />
        </div>
        {error && showError && (
          <p className={cl(errorClassName || 'mt-2 text-sm text-red-600')}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
