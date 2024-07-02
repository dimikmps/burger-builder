import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
   const { login } = useAuth();
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      await login(name, password);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
         </div>
         <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <button type='submit'>Login</button>
      </form>
   );
};

export default LoginForm;
