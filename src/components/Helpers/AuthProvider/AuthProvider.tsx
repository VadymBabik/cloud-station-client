import { createContext, ReactNode, useContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { GET_CURRENT_USER } from '../../../main/auth/queries/getUserbyId.query';
import { graphQLClient } from '../../../Hooks/baseQuery/graphQLClient/graphQLClient';
import { removeCookies } from 'cookies-next';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
}

type ContextProps = AuthenticatedUser | null;

interface IContextProps {
  currentUser: ContextProps;
}

const AuthContext = createContext<IContextProps>({
  currentUser: null
});
export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const queryClient = useQueryClient();

  const isAuthRoute =
    /^\/auth/.test(router.pathname) || /^\/register/.test(router.pathname);

  const [currentUser, setCurrentUser] = useState<ContextProps>(null);

  const { data } = useQuery(
    'currentUser',
    () => graphQLClient.request(GET_CURRENT_USER),
    {
      enabled: !isAuthRoute,
      onSuccess: (data) => {
        if (data?.currentUser) {
          setCurrentUser(data);
        }
      },
      onError: (error) => {
        if (error) {
          setCurrentUser(null);
          queryClient.clear();
          removeCookies('token');
          if (!isAuthRoute) {
            router.push('/auth/login');
          }
        }
      }
    }
  );

  const authContext = {
    currentUser: data?.getCurrentUser
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
