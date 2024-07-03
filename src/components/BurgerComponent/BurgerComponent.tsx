import { Box, styled } from '@mui/material';
import { useIngredients } from '../../contexts/IngredientsContext';

const StyledIngredientImage = styled('img')(({ theme }) => ({
   display: 'block',
   margin: 'auto',
   cursor: 'pointer',
   width: '80%',
   [theme.breakpoints.up('sm')]: {
      width: '60%',
   },
   [theme.breakpoints.up('md')]: {
      width: '50%',
   },
   [theme.breakpoints.up('lg')]: {
      width: '40%',
   },
}));

/**
 * Burger Component
 * Represents the burger preview, with all (if any) selected ingredients
 * Any extra/new ingredients are added on top of any pre-selected ones
 * @returns {React.JSX.Element} - The BurgerComponent JSX element
 */
const BurgerComponent = (): React.JSX.Element => {
   const { currentIngredients, removeIngredientFromCurrent } = useIngredients();

   const handleRemoveIngredientFromCurrent = (index: number) => {
      removeIngredientFromCurrent(index);
   };

   return (
      <Box my={4} textAlign='center'>
         <StyledIngredientImage src='https://react-interview.xm.com/img/bun_top.png' alt='bun_top' />
         {currentIngredients.map((ingredient, index) => (
            <StyledIngredientImage
               key={index}
               src={`https://react-interview.xm.com/img/${ingredient.src}`}
               alt={ingredient.name}
               onClick={() => handleRemoveIngredientFromCurrent(index)}
            />
         ))}
         <StyledIngredientImage src='https://react-interview.xm.com/img/bun_bottom.png' alt='bun_bottom' />
      </Box>
   );
};

export default BurgerComponent;
