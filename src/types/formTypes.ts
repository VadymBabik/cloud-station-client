import { ChangeEvent, FocusEvent } from 'react';

export type RegisterFormFieldType<InputType> = {
  onBlur: (e: FocusEvent<InputType>) => void;
  onChange: (e: ChangeEvent<InputType>) => void;
  ref: React.Ref<InputType>;
  name: string;
};

export type ErrorMessage = string | undefined;
