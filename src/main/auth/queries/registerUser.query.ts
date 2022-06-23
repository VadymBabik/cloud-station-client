import { gql } from 'graphql-request';

export interface createUserResponse {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}

export const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $name: String!) {
    registerUser(
      createUserInput: { email: $email, password: $password, name: $name }
    ) {
      id
      email
      name
      imageUrl
    }
  }
`;
