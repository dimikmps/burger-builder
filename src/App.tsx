import React from 'react';
import LoginForm from './components/LoginFormComponent';
import MainContentContainerComponent from './components/MainContentContainerComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import IngredientsList from './components/IngredientsList';
import BurgerComponent from './components/BurgerComponent';
import { useAuth } from './contexts/AuthContext';

const App = (): React.JSX.Element => {
   const { loginToken } = useAuth();

   return (
      <div>
         {!loginToken ? (
            <LoginForm />
         ) : (
            <MainContentContainerComponent>
               <HeaderComponent />
               <IngredientsList />
               <BurgerComponent />
            </MainContentContainerComponent>
         )}
      </div>
   );
};

export default App;
