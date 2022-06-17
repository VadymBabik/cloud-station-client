import { gql } from 'graphql-request';

export interface createUserResponse {
  id: string;
  email: string;
  password: string;
}

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(createUserInput: { email: $email, password: $password }) {
      id
      email
      password
    }
  }
`;
