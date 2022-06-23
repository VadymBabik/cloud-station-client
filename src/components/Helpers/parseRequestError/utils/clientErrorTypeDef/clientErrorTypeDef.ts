import { ClientError } from 'graphql-request';

function clientErrorTypeDef(error: unknown): error is ClientError {
  return !!(error as ClientError)?.response;
}

export default clientErrorTypeDef;
