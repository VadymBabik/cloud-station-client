import { useReactHookForm } from '../../../../../../Hooks/useReactHookForm';

import { CREATE_USER } from '../../queries/registerUser.query';

import { useMutationHelper } from '../../../../../../Hooks/baseQuery/baseQuery';

import { LoginFormData } from './useLoginForm.types';
import { LoginFields } from '../../AuthTypes';
import { loginFormValidationSchema } from './loginFormValidationSchema';

const defaultValuesLoginForm: LoginFormData = {
  email: '',
  password: ''
};

const useLoginForm = () => {
  const { errors, handleSubmitReactHookForm, register, resetForm } =
    useReactHookForm<LoginFormData>({
      defaultValues: defaultValuesLoginForm,
      schema: loginFormValidationSchema,
      isModalForm: true
    });

  const { mutate, error, isLoading } = useMutationHelper({
    query: CREATE_USER,
    cacheKey: 'users'
  });

  if (error) {
    throw new Error('error');
  }
  return {
    loginUser: handleSubmitReactHookForm({
      onSubmit: async (data: LoginFormData) => mutate(data)
    }),
    registerFields: {
      registerEmail: register(LoginFields.EMAIL),
      registerPassword: register(LoginFields.PASSWORD)
    },
    validationErrors: {
      emailValidationError: errors?.email?.message,
      passwordValidationError: errors?.password?.message
    },
    resetForm,
    error,
    isLoading
  };
};

export default useLoginForm;
