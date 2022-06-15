import { useReactHookForm } from '../../../../../../Hooks/useReactHookForm';

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
      schema: loginFormValidationSchema
    });
  return {
    loginUser: handleSubmitReactHookForm({
      onSubmit: async (data: LoginFormData) => console.log(data)
    }),
    registerFields: {
      registerEmail: register(LoginFields.EMAIL),
      registerPassword: register(LoginFields.PASSWORD)
    },
    validationErrors: {
      emailValidationError: errors?.email?.message,
      passwordValidationError: errors?.password?.message
    },
    resetForm
  };
};

export default useLoginForm;
