import * as yup from 'yup';

import { LoginFields } from '../../AuthTypes';

export const loginFormValidationSchema = yup.object({
  [LoginFields.EMAIL]: yup
    .string()
    .nullable(true)
    .email()
    .required('required')
    .min(2, 'some min')
    .max(20, 'some long'),
  [LoginFields.PASSWORD]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(5, 'some min')
    .max(200, 'some long')
});
