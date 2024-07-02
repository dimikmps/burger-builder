import { useIngredients } from '../../contexts/IngredientsContext';

const BurgerComponent = (): React.JSX.Element => {
   const { currentIngredients, removeIngredientFromCurrent } = useIngredients();

   const handleRemoveIngredientFromCurrent = (index: number) => {
      removeIngredientFromCurrent(index);
   };

   return (
      <div>
         <img src='https://react-interview.xm.com/img/bun_top.png' alt='bun_top' />
         {currentIngredients.map((ingredient, index) => (
            <div key={index} onClick={() => handleRemoveIngredientFromCurrent(index)}>
               <img src={`https://react-interview.xm.com/img/${ingredient.src}`} alt={ingredient.name} />
            </div>
         ))}
         <img src='https://react-interview.xm.com/img/bun_bottom.png' alt='bun_bottom' />
      </div>
   );
};

export default BurgerComponent;
