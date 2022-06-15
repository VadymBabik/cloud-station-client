import { SubmitModalButton } from '../../../../../Helpers/Buttons/SubmitModalButton';
import { useLoginForm } from '../../Auth/Hooks/useLoginForm';
import { InputField } from '../../../../../Helpers/FormFilds/InputField';
import { InputType } from '../../../../../types';
import React from 'react';

const LoginModalButton = () => {
  const { loginUser, registerFields, validationErrors, resetForm } =
    useLoginForm();
  return (
    <SubmitModalButton
      title={'Login'}
      text={'Sing In'}
      isLoading={false}
      onSubmit={loginUser}
      onOpen={resetForm}
    >
      <div className="space-y-6">
        <InputField
          label={'Email'}
          type={InputType.EMAIL}
          disabled={false}
          name={registerFields.registerEmail.name}
          ref={registerFields.registerEmail.ref}
          onChange={registerFields.registerEmail.onChange}
          error={validationErrors.emailValidationError}
        />
        <InputField
          label={'Password'}
          type={InputType.PASSWORD}
          disabled={false}
          name={registerFields.registerPassword.name}
          ref={registerFields.registerPassword.ref}
          onChange={registerFields.registerPassword.onChange}
          error={validationErrors.passwordValidationError}
        />
      </div>
    </SubmitModalButton>
  );
};

export default LoginModalButton;
