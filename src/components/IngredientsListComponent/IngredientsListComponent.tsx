import { Ingredient } from '../../interfaces/Ingredient.interface';
import { useIngredients } from '../../contexts/IngredientsContext';

const IngredientsListComponent = (): React.JSX.Element => {
   const { availableIngredients, addIngredientToCurrent } = useIngredients();

   const handleAddIngredientToCurrent = (ingredient: Ingredient) => {
      addIngredientToCurrent(ingredient);
   };

   return (
      <div>
         {availableIngredients.map((ingredient: Ingredient) => (
            <div key={ingredient.id} onClick={() => handleAddIngredientToCurrent(ingredient)}>
               <img src={`https://react-interview.xm.com/img/${ingredient.src}`} alt={ingredient.name} />
               <p>{ingredient.name}</p>
            </div>
         ))}
      </div>
   );
};

export default IngredientsListComponent;
