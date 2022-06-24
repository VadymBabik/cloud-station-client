import { gql } from 'graphql-request';

export interface updateUserResponse {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}

export const UPDATE_USER = gql`
  mutation LoginUser(
    $imageUrl: String
    $email: String
    $name: String
    $id: Int!
  ) {
    updateUser(
      updateUserInput: {
        imageUrl: $imageUrl
        name: $name
        email: $email
        id: $id
      }
    ) {
      id
      email
      name
      imageUrl
    }
  }
`;
