import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { AppToaster } from './lib/toast/appToaster';
import { AppRouter } from './routes/Router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <AppToaster />
    </QueryClientProvider>
  );
}

export default App;
