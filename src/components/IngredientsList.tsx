// src/components/IngredientsList.tsx
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { Ingredient } from '../interfaces/Ingredient.interface';
import { useIngredients } from '../contexts/IngredientsContext';

const fetchIngredients = async (token: string | null) => {
   const response = await fetch('https://react-interview.xm.com/ingredients', {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return response.json();
};

const IngredientsList = () => {
   const { loginToken } = useAuth();
   const { addIngredient } = useIngredients();

   const handleAddIngredient = (ingredient: Ingredient) => {
      addIngredient(ingredient);
   };

   const { data, error, isLoading } = useQuery({
      queryKey: ['ingredients', loginToken],
      queryFn: () => fetchIngredients(loginToken),
      enabled: !!loginToken,
   });

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error loading ingredients</div>;

   return (
      <div>
         {data.map((ingredient: Ingredient) => (
            <div key={ingredient.id} onClick={() => handleAddIngredient(ingredient)}>
               <img src={`https://react-interview.xm.com/img/${ingredient.src}`} alt={ingredient.name} />
               <p>{ingredient.name}</p>
            </div>
         ))}
      </div>
   );
};

export default IngredientsList;
