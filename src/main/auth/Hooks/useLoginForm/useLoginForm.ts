import { useRouter } from 'next/router';

import { AuthFields } from '../../AuthTypes';
import { loginFormData } from './useLoginForm.types';

import { useReactHookForm } from '../../../../Hooks/useReactHookForm';

import { useMutationHelper } from '../../../../Hooks/baseQuery/baseQuery';
import { LOGIN_USER } from '../../queries/loginUser.query';

import { loginFormValidationSchema } from './loginFormValidationSchema';

const defaultValuesAuthForm: loginFormData = {
  email: '',
  password: ''
};

const useLoginForm = () => {
  const router = useRouter();

  const { errors, handleSubmitReactHookForm, register, resetForm } =
    useReactHookForm<loginFormData>({
      defaultValues: defaultValuesAuthForm,
      schema: loginFormValidationSchema
    });

  const { mutate, error, isLoading, isSuccess } = useMutationHelper({
    query: LOGIN_USER,
    cacheKey: 'login'
  });

  if (isSuccess && !error) {
    router.push('/dashboard');
  }

  return {
    loginUser: handleSubmitReactHookForm({
      onSubmit: async (data: loginFormData) => {
        mutate(data);
      }
    }),
    registerFields: {
      registerEmail: register(AuthFields.EMAIL),
      registerPassword: register(AuthFields.PASSWORD)
    },
    validationErrors: {
      emailValidationError: errors?.email?.message,
      passwordValidationError: errors?.password?.message
    },
    resetForm,
    error: error instanceof Error ? 'Invalid server response' : null,
    isLoading
  };
};

export default useLoginForm;
