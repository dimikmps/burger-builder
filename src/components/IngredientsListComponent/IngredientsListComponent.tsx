import { Ingredient } from '../../interfaces/Ingredient.interface';
import { useIngredients } from '../../contexts/IngredientsContext';
import { Box, Grid, Typography } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EggAltIcon from '@mui/icons-material/EggAlt';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

const IngredientsListComponent = (): React.JSX.Element => {
   const { availableIngredients, addIngredientToCurrent } = useIngredients();

   const handleAddIngredientToCurrent = (ingredient: Ingredient) => {
      addIngredientToCurrent(ingredient);
   };

   const generateIcon = (ingredientKey: number) => {
      switch (ingredientKey) {
         case 1:
            return <LunchDiningIcon />;
         case 2:
            return <OutdoorGrillIcon />;
         default:
            return <EggAltIcon />;
      }
   };

   return (
      <Box
         display='flex'
         flexDirection='column'
         p={3}
         sx={{ background: 'linear-gradient(to right, #f8f9fa, #e9ecef)' }}
      >
         <Typography variant='h6' component='div' pb={2}>
            Add ingredients
         </Typography>

         <Box flexGrow={1}>
            <Grid container spacing={2} justifyContent='space-evenly'>
               {availableIngredients.map((ingredient: Ingredient) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={ingredient.id}>
                     <Box
                        onClick={() => handleAddIngredientToCurrent(ingredient)}
                        mx={4}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        sx={{
                           padding: 2,
                           backgroundColor: '#fff',
                           borderRadius: 1,
                           boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                           cursor: 'pointer',
                           '&:hover': {
                              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
                           },
                        }}
                     >
                        {generateIcon(ingredient.id)}
                        <Typography align='center'>
                           {ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)}
                        </Typography>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   );
};

export default IngredientsListComponent;
