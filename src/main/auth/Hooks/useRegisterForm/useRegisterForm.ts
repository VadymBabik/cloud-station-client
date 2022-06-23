import { useReactHookForm } from '../../../../Hooks/useReactHookForm';
import { useRouter } from 'next/router';

import { AuthRegisterFields } from '../../AuthTypes';

import { REGISTER_USER } from '../../queries/registerUser.query';

import { useMutationHelper } from '../../../../Hooks/baseQuery/baseQuery';
import { useRegisterFormData } from './useRegisterForm.types';

import { registerFormValidationSchema } from './registerFormValidationSchema';

const defaultValuesRegisterForm: useRegisterFormData = {
  name: '',
  email: '',
  password: ''
};

const useRegisterForm = () => {
  const router = useRouter();
  const { errors, handleSubmitReactHookForm, register, resetForm } =
    useReactHookForm<useRegisterFormData>({
      defaultValues: defaultValuesRegisterForm,
      schema: registerFormValidationSchema
    });

  const { mutate, error, isLoading, isSuccess } = useMutationHelper({
    query: REGISTER_USER,
    cacheKey: 'register'
  });
  if (isSuccess && !error) {
    router.push('/dashboard');
  }
  return {
    registerUser: handleSubmitReactHookForm({
      onSubmit: async (data: useRegisterFormData) => mutate(data)
    }),

    registerFields: {
      registerName: register(AuthRegisterFields.NAME),
      registerEmail: register(AuthRegisterFields.EMAIL),
      registerPassword: register(AuthRegisterFields.PASSWORD)
    },

    validationErrors: {
      nameValidationError: errors?.name?.message,
      emailValidationError: errors?.email?.message,
      passwordValidationError: errors?.password?.message
    },

    resetForm,
    isLoading,
    error: error instanceof Error ? 'Invalid server response' : null
  };
};

export default useRegisterForm;
