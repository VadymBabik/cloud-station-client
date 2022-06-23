import { gql } from 'graphql-request';

export interface loginUserResponse {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(createUserInput: { email: $email, password: $password }) {
      id
      email
      name
      imageUrl
    }
  }
`;
