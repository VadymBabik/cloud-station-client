import isArray from 'lodash/isArray';

interface PayloadErrorType {
  fullMessages: string[] | null;
}

function payloadErrorTypeDef(error: any): error is PayloadErrorType {
  return !!isArray(error?.fullMessages);
}

export default payloadErrorTypeDef;
