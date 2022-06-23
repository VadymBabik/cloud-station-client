import { gql } from 'graphql-request';

export interface getUserByIdResponse {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      name
      imageUrl
    }
  }
`;
