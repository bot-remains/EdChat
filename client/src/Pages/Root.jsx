import Navbar from '@/Components/ui/Custom/navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <div>
        {location.pathname === '/sign-in' || location.pathname === '/sign-up' ?
          null
        : <Navbar />}
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
