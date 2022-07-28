import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import Album from './components/Album';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Album />
    </QueryClientProvider>
  );
}

export default App;
