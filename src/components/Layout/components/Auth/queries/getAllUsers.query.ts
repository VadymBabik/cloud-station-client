import { gql } from 'graphql-request';

export interface createUserResponse {
  id: string;
  email: string;
}

export const GER_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      email
    }
  }
`;
