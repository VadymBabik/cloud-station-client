import { GraphQLClient } from 'graphql-request';
import { setCookies } from 'cookies-next';

import { GRAPHQL_API_URI } from '../../../config';

setCookies('key', 'value');
export const graphQLClient = new GraphQLClient(String(GRAPHQL_API_URI), {
  credentials: 'include',
  mode: 'no-cors'
  // headers: {
  //   authorization: checkCookies('token') ? `Bearer ${getCookie('token')}` : ''
  // }
});
