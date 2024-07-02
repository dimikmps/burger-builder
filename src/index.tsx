import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { IngredientsProvider } from './contexts/IngredientsContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();

root.render(
   <QueryClientProvider client={queryClient}>
      <AuthProvider>
         <IngredientsProvider>
            <App />
         </IngredientsProvider>
      </AuthProvider>
   </QueryClientProvider>
);
