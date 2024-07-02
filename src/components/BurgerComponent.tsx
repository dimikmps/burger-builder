import { useIngredients } from '../contexts/IngredientsContext';

const BurgerComponent = () => {
   const { ingredients, removeIngredient } = useIngredients();

   const handleRemoveIngredient = (index: number) => {
      removeIngredient(index);
   };

   return (
      <div>
         <img src='https://react-interview.xm.com/img/bun_top.png' alt='bun_top' />
         {ingredients.map((ingredient, index) => (
            <div key={index} onClick={() => handleRemoveIngredient(index)}>
               <img src={`https://react-interview.xm.com/img/${ingredient.src}`} alt={ingredient.name} />
            </div>
         ))}
         <img src='https://react-interview.xm.com/img/bun_bottom.png' alt='bun_bottom' />
      </div>
   );
};

export default BurgerComponent;
