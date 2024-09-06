import { Spinner as spinner } from '@/Components/ui/Spinner';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Chat from './Pages/Chat';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Root from './Pages/Root';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: spinner,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </QueryClientProvider>,
);
