import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
   loginToken: string | null;
   login: (name: string, password: string) => Promise<void>;
   logout: () => void;
}

type AuthProviderProps = {
   children: ReactNode;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
   const [loginToken, setLoginToken] = useState<string | null>(null);

   const login = async (name: string, password: string) => {
      try {
         const response = await axios.post('https://react-interview.xm.com/login', { name, password });

         setLoginToken(response.data.token);
      } catch (error) {
         console.error('Login failed', error);
      }
   };

   const logout = () => {
      setLoginToken(null);
   };

   return <AuthContext.Provider value={{ loginToken, login, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);

   if (context === undefined) {
      throw new Error('An error occured with the Authorization process');
   }

   return context;
};

export { AuthProvider, useAuth };
