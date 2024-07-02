import IngredientsList from './components/IngredientsList';
import LoginForm from './components/LoginFormComponent';
import BurgerComponent from './components/BurgerComponent';
import { useAuth } from './contexts/AuthContext';

const App = () => {
   const { loginToken, logout } = useAuth();

   return (
      <div>
         {!loginToken ? (
            <LoginForm />
         ) : (
            <div>
               <button onClick={logout}>Logout</button>
               <IngredientsList />
               <BurgerComponent />
            </div>
         )}
      </div>
   );
};

export default App;
