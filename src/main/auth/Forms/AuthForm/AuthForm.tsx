import {
  ErrorMessage,
  InputType,
  isLoading,
  RegisterFormFieldType
} from '../../../../types';

import { Form } from '../../../../components/Helpers/Form';
import { InputField } from '../../../../components/Helpers/FormFilds/InputField';

interface AuthFormProps {
  registerEmail: RegisterFormFieldType<HTMLInputElement>;
  registerPassword: RegisterFormFieldType<HTMLInputElement>;
  emailValidationError: ErrorMessage;
  passwordValidationError: ErrorMessage;
  form?: string;
  isLoading?: isLoading;
}

const AuthForm = ({
  registerEmail,
  registerPassword,
  emailValidationError,
  passwordValidationError,
  form,
  isLoading
}: AuthFormProps) => {
  return (
    <Form className="space-y-6" id={form}>
      <InputField
        label={'Email'}
        type={InputType.EMAIL}
        disabled={isLoading}
        name={registerEmail.name}
        ref={registerEmail.ref}
        onChange={registerEmail.onChange}
        error={emailValidationError}
      />
      <InputField
        label={'Password'}
        type={InputType.PASSWORD}
        disabled={isLoading}
        name={registerPassword.name}
        ref={registerPassword.ref}
        onChange={registerPassword.onChange}
        error={passwordValidationError}
      />
    </Form>
  );
};

export default AuthForm;
