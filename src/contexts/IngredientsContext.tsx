import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Ingredient } from '../interfaces/Ingredient.interface';
import { useAuth } from './AuthContext';

interface IngredientsContextType {
   availableIngredients: Ingredient[] | [];
   currentIngredients: Ingredient[] | [];
   addIngredientToCurrent: (ingredient: Ingredient) => void;
   removeIngredientFromCurrent: (index: number) => void;
   isLoading: boolean;
   error: Error | null;
}

type IngredientsProviderProps = {
   children: ReactNode;
};

const IngredientsContext = createContext<IngredientsContextType | undefined>(undefined);

const IngredientsProvider = ({ children }: IngredientsProviderProps) => {
   const { loginToken } = useAuth();
   const [availableIngredients, setAvailableIngredients] = useState<Ingredient[]>([]);

   const [currentIngredients, setCurrentIngredients] = useState<Ingredient[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      const fetchIngredients = async () => {
         setIsLoading(true);
         try {
            const response = await fetch('https://react-interview.xm.com/ingredients', {
               headers: {
                  Authorization: `Bearer ${loginToken}`,
               },
            });

            if (!response.ok) {
               throw new Error('Network error');
            }

            const data: Ingredient[] = await response.json();
            setAvailableIngredients(data);
         } catch (err) {
            setError(err as Error);
         } finally {
            setIsLoading(false);
         }
      };

      if (loginToken) {
         fetchIngredients();
      }
   }, [loginToken]);

   const addIngredientToCurrent = (ingredient: Ingredient) => {
      setCurrentIngredients([ingredient, ...currentIngredients]);
   };

   const removeIngredientFromCurrent = (index: number) => {
      const newIngredients = currentIngredients.filter((_, i) => i !== index);
      setCurrentIngredients(newIngredients);
   };

   return (
      <IngredientsContext.Provider
         value={{
            availableIngredients,
            currentIngredients,
            addIngredientToCurrent,
            removeIngredientFromCurrent,
            isLoading,
            error,
         }}
      >
         {children}
      </IngredientsContext.Provider>
   );
};

const useIngredients = (): IngredientsContextType => {
   const context = useContext(IngredientsContext);

   if (context === undefined) {
      throw new Error('An error occured upom the ingredients population process');
   }

   return context;
};

export { IngredientsProvider, useIngredients };
