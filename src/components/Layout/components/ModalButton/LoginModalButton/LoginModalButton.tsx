import { useLoginForm } from '../../Auth/Hooks/useLoginForm';

import { LoginForm } from '../../Auth/Forms/LoginForm';

import { SimpleModalButton } from '../../../../../Helpers/Buttons/SimpleModalButton';

const LoginModalButton = () => {
  const { loginUser, registerFields, validationErrors, resetForm } =
    useLoginForm();
  return (
    <SimpleModalButton
      titleModal={'Login'}
      buttonText={'Sing In'}
      isLoading={false}
      onSubmit={loginUser}
      onOpen={resetForm}
    >
      <LoginForm
        registerEmail={registerFields.registerEmail}
        registerPassword={registerFields.registerPassword}
        emailValidationError={validationErrors.emailValidationError}
        passwordValidationError={validationErrors.passwordValidationError}
      />
    </SimpleModalButton>
  );
};

export default LoginModalButton;
