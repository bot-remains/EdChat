import Navbar from '@/Components/ui/Custom/navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      {location.pathname === '/sign-in' || location.pathname === '/sign-up' ?
        null
      : <Navbar />}
      <Outlet />
    </>
  );
}
