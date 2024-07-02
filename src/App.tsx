import React from 'react';
import LoginForm from './components/LoginFormComponent/LoginFormComponent';
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
            <LoginForm />
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
