import { ClientError } from 'graphql-request';
import isArray from 'lodash/isArray';

import { checkClientErrorErrorsStatus } from './utils/checkClientErrorErrorsStatus';
import { clientErrorTypeDef } from './utils/clientErrorTypeDef';
import { payloadErrorTypeDef } from './utils/payloadErrorTypeDef';

interface PayloadErrorType {
  fullMessages: string[] | null;
}

export type ErrorType = Error | ClientError | PayloadErrorType | null;

const defaultServerError = 'Invalid server response';
const defaultClientError = 'Request Timeout';
const default401Error = 'Access denied';
const default403Error = 'Access denied';
const default404Error = 'Record Not Found';

function parseRequestError(error: unknown): string | null {
  if (!error) {
    return null;
  }

  if (payloadErrorTypeDef(error) && isArray(error?.fullMessages)) {
    return error.fullMessages.join(', ') || defaultServerError;
  }

  if (checkClientErrorErrorsStatus(error, { status_code: 401 })) {
    return default401Error;
  }

  if (checkClientErrorErrorsStatus(error, { status_code: 403 })) {
    return default403Error;
  }

  if (
    checkClientErrorErrorsStatus(error, (e) =>
      /5\d{2}/.test(String(e?.status_code))
    )
  ) {
    return defaultServerError;
  }

  if (checkClientErrorErrorsStatus(error, { status_code: 404 })) {
    return default404Error;
  }

  if (clientErrorTypeDef(error)) {
    return defaultServerError;
  }

  return defaultClientError;
}

export default parseRequestError;
