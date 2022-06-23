import isArray from 'lodash/isArray';
import some from 'lodash/some';

import { clientErrorTypeDef } from '../clientErrorTypeDef';

interface ClientErrorErrorType {
  status_code: number;
}

type ClientErrorErrorStatusChecker =
  | ClientErrorErrorType
  | ((e: ClientErrorErrorType) => boolean);

function checkClientErrorErrorsStatus(
  error: unknown,
  checker: ClientErrorErrorStatusChecker
): boolean {
  if (!clientErrorTypeDef(error) || !isArray(error?.response?.errors)) {
    return false;
  }
  return some(error.response.errors, checker);
}

export default checkClientErrorErrorsStatus;
