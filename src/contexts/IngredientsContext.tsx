import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Ingredient } from '../interfaces/Ingredient.interface';

interface IngredientsContextType {
   ingredients: Ingredient[] | [];
   addIngredient: (ingredient: Ingredient) => void;
   removeIngredient: (index: number) => void;
}

type IngredientsProviderProps = {
   children: ReactNode;
};
const IngredientsContext = createContext<IngredientsContextType | undefined>(undefined);

const IngredientsProvider = ({ children }: IngredientsProviderProps) => {
   const [ingredients, setIngredients] = useState<Ingredient[]>([]);

   const addIngredient = (ingredient: Ingredient) => {
      setIngredients([...ingredients, ingredient]);
   };

   const removeIngredient = (index: number) => {
      const newIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(newIngredients);
   };

   return (
      <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
         {children}
      </IngredientsContext.Provider>
   );
};

const useIngredients = (): IngredientsContextType => {
   const context = useContext(IngredientsContext);

   if (context === undefined) {
      throw new Error('An error occured with the Ingredients Context');
   }

   return context;
};

export { IngredientsProvider, useIngredients };
