import * as yup from 'yup';

import { AuthFields } from '../../AuthTypes';

export const loginFormValidationSchema = yup.object({
  [AuthFields.EMAIL]: yup
    .string()
    .nullable(true)
    .email()
    .required('required')
    .min(2, 'some min')
    .max(20, 'some long'),
  [AuthFields.PASSWORD]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(5, 'some min')
    .max(200, 'some long')
});
