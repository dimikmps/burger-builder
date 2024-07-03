import React from 'react';
import LoginFormComponent from './components/LoginFormComponent/LoginFormComponent';
import MainContentContainerComponent from './components/MainContentContainerComponent/MainContentContainerComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import IngredientsListComponent from './components/IngredientsListComponent/IngredientsListComponent';
import BurgerComponent from './components/BurgerComponent/BurgerComponent';
import { useAuth } from './contexts/AuthContext';

const App = (): React.JSX.Element => {
   const { loginToken } = useAuth();

   return (
      <div>
         {!loginToken ? (
            <LoginFormComponent />
         ) : (
            <MainContentContainerComponent>
               <HeaderComponent />
               <IngredientsListComponent />
               <BurgerComponent />
            </MainContentContainerComponent>
         )}
      </div>
   );
};

export default App;
