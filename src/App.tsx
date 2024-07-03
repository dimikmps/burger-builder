import React, { useEffect, useState } from 'react';
import LoginFormComponent from './components/LoginFormComponent/LoginFormComponent';
import MainContentContainerComponent from './components/MainContentContainerComponent/MainContentContainerComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import IngredientsListComponent from './components/IngredientsListComponent/IngredientsListComponent';
import BurgerComponent from './components/BurgerComponent/BurgerComponent';
import ErrorModalComponent from './components/ErrorModalComponent/ErrorModalComponent';
import { useAuth } from './contexts/AuthContext';

const App = (): React.JSX.Element => {
   const { loginToken, error, clearError } = useAuth();
   const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

   useEffect(() => {
      if (error) {
         setIsErrorModalOpen(true);
      }
   }, [error]);

   const handleCloseErrorModal = () => {
      setIsErrorModalOpen(false);
      clearError();
   };

   return (
      <MainContentContainerComponent>
         {!loginToken ? (
            <>
               <LoginFormComponent />
               {error && (
                  <ErrorModalComponent isOpen={isErrorModalOpen} error={error} setClosed={handleCloseErrorModal} />
               )}
            </>
         ) : (
            <>
               <HeaderComponent />
               <IngredientsListComponent />
               <BurgerComponent />
            </>
         )}
      </MainContentContainerComponent>
   );
};

export default App;
