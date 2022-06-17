import { GraphQLClient } from 'graphql-request';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const graphQLClient = new GraphQLClient(
  'http://localhost:3003/graphql',
  {
    // credentials: 'include'
    // mode: 'cors'
  }
);

interface useQueryHelperProps {
  query: string;
  cacheKey: string;
}

export const useQueryHelper = ({ query, cacheKey }: useQueryHelperProps) =>
  useQuery(cacheKey, () => graphQLClient.request(query));

interface useMutationHelperProps<CreateQueryInput> {
  query: string;
  cacheKey?: string;
}

export function useMutationHelper<CreateQueryInput>({
  query,
  cacheKey
}: useMutationHelperProps<CreateQueryInput>) {
  const client = useQueryClient();
  return useMutation(
    (input: CreateQueryInput) => graphQLClient.request(query, input),
    {
      onSettled() {
        client.invalidateQueries(cacheKey);
      }
    }
  );
}
