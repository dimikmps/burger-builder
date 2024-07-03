import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
   loginToken: string | null;
   login: (name: string, password: string) => Promise<void>;
   logout: () => void;
   error: Error | null;
   clearError: () => void;
}

type AuthProviderProps = {
   children: ReactNode;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
   const [loginToken, setLoginToken] = useState<string | null>(null);
   const [error, setError] = useState<Error | null>(null);

   const login = async (name: string, password: string) => {
      try {
         const response = await fetch('https://react-interview.xm.com/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password }),
         });

         if (!response.ok) {
            if (response.status === 401) {
               throw new Error('Invalid credentials');
            } else {
               throw new Error('Error processing request');
            }
         }

         const data = await response.json();

         setLoginToken(data.token);

         setError(null); // Clear any previous errors on successful login
      } catch (err) {
         setError(err as Error);
      }
   };

   const logout = () => {
      setLoginToken(null);
   };

   const clearError = () => {
      setError(null);
   };

   return (
      <AuthContext.Provider value={{ loginToken, login, logout, error, clearError }}>{children}</AuthContext.Provider>
   );
};

const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);

   if (context === undefined) {
      throw new Error('An error occured during the Auth process');
   }

   return context;
};

export { AuthProvider, useAuth };
