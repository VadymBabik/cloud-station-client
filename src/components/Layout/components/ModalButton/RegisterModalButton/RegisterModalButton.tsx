import { useLoginForm } from '../../../../../main/auth/Hooks/useLoginForm';

import { AuthForm } from '../../../../../main/auth/Forms/AuthForm';

import { SimpleModalButton } from '../../../../Helpers/Buttons/SimpleModalButton';
import { AlertMessage } from '../../../../Helpers/AlertMessage';
import { AuthAction } from '../../../../../main/auth/AuthTypes';

const RegisterModalButton = () => {
  const {
    loginUser,
    registerFields,
    validationErrors,
    resetForm,
    isLoading,
    error
  } = useLoginForm({ action: AuthAction.REGISTER });

  return (
    <SimpleModalButton
      titleModal={'Register'}
      buttonText={'Sing Up'}
      isLoading={isLoading}
      onSubmit={loginUser}
      onOpen={resetForm}
    >
      <AuthForm
        registerEmail={registerFields.registerEmail}
        registerPassword={registerFields.registerPassword}
        emailValidationError={validationErrors.emailValidationError}
        passwordValidationError={validationErrors.passwordValidationError}
      />

      <div className="pt-4">
        <AlertMessage message={error} />
      </div>
    </SimpleModalButton>
  );
};

export default RegisterModalButton;
