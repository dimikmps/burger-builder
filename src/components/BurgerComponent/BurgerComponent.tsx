import { Box } from '@mui/material';
import { useIngredients } from '../../contexts/IngredientsContext';

/**
 * Burger Component
 * Represents the burger preview, with all (if any) selected ingredients
 * @returns {React.JSX.Element} - The BurgerComponent JSX element
 */
const BurgerComponent = (): React.JSX.Element => {
   const { currentIngredients, removeIngredientFromCurrent } = useIngredients();

   const handleRemoveIngredientFromCurrent = (index: number) => {
      removeIngredientFromCurrent(index);
   };

   return (
      <Box my={4} textAlign='center'>
         <Box
            component='img'
            src='https://react-interview.xm.com/img/bun_top.png'
            alt='bun_top'
            display='block'
            margin='auto'
            sx={{
               width: { xs: '80%', sm: '60%', md: '50%', lg: '40%' },
            }}
         />
         {currentIngredients.map((ingredient, index) => (
            <Box
               key={index}
               onClick={() => handleRemoveIngredientFromCurrent(index)}
               component='img'
               src={`https://react-interview.xm.com/img/${ingredient.src}`}
               alt={ingredient.name}
               display='block'
               margin='auto'
               sx={{
                  width: { xs: '80%', sm: '60%', md: '50%', lg: '40%' },
                  cursor: 'pointer',
               }}
            />
         ))}
         <Box
            component='img'
            src='https://react-interview.xm.com/img/bun_bottom.png'
            alt='bun_bottom'
            display='block'
            margin='auto'
            sx={{
               width: { xs: '80%', sm: '60%', md: '50%', lg: '40%' },
            }}
         />{' '}
      </Box>
   );
};

export default BurgerComponent;
