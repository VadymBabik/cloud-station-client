import { AlertMessage } from '../../../../components/Helpers/AlertMessage';
import { useLoginForm } from '../../Hooks/useLoginForm';
import { Form } from '../../../../components/Helpers/Form';
import { InputField } from '../../../../components/Helpers/FormFilds/InputField';
import { ButtonType, InputType } from '../../../../types';
import { SimpleButton } from '../../../../components/Helpers/Buttons/SimpleButton';
import { NextLinkHelper } from '../../../../components/Helpers/lincs/NextLinkHelper';
import { LoginIcon } from '@heroicons/react/outline';

const LoginIndexPage = () => {
  const { loginUser, registerFields, validationErrors, isLoading, error } =
    useLoginForm();
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md py-8 px-4 sm:px-10">
        <div className="flex justify-center">
          <LoginIcon className="w-20 h-20 text-blue-700" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 max-w">
          Or{' '}
          <NextLinkHelper href={'/auth/register'}>
            <span>create new account</span>
          </NextLinkHelper>
        </p>
        <Form className="space-y-6 mt-10" onSubmit={loginUser}>
          <InputField
            label={'Email'}
            type={InputType.EMAIL}
            disabled={isLoading}
            name={registerFields.registerEmail.name}
            ref={registerFields.registerEmail.ref}
            onChange={registerFields.registerEmail.onChange}
            error={validationErrors.emailValidationError}
          />
          <InputField
            label={'Password'}
            type={InputType.PASSWORD}
            disabled={isLoading}
            name={registerFields.registerPassword.name}
            ref={registerFields.registerPassword.ref}
            onChange={registerFields.registerPassword.onChange}
            error={validationErrors.passwordValidationError}
          />
          <SimpleButton
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            type={ButtonType.SUBMIT}
          >
            {isLoading ? 'Processing...' : 'Login'}
          </SimpleButton>
        </Form>
        <div className="pt-4">
          <AlertMessage message={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginIndexPage;
