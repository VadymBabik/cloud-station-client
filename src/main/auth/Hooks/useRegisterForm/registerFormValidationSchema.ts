import * as yup from 'yup';

import { AuthRegisterFields } from '../../AuthTypes';

export const registerFormValidationSchema = yup.object({
  [AuthRegisterFields.NAME]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(1, 'some min')
    .max(20, 'some long'),
  [AuthRegisterFields.EMAIL]: yup
    .string()
    .nullable(true)
    .email()
    .required('required')
    .min(3, 'some min')
    .max(20, 'some long'),
  [AuthRegisterFields.PASSWORD]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(5, 'some min')
    .max(200, 'some long')
});
