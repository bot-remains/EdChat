/* eslint-disable tailwindcss/classnames-order */
import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';

const Navbar = () => {
  const [userCookie, setUserCookie] = useState(null); // State to store user cookie

  const checkUser = () => {
    const user = Cookies.get('user');
    setUserCookie(user);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleSignOut = () => {
    Cookies.remove('user');
    setUserCookie(null);
    axios
      .get('/api/v1/auth/sign-out', {
        withCredentials: true,
      })
      .then(() => {
        console.log('Cookie delete');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="shadow-md bg-extend-primary">
      <div className="px-28">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-28">
            <div className="shrink-0">
              <NavLink
                to="/"
                className="text-2xl font-bold text-extend-text"
              >
                EduChat
              </NavLink>
            </div>
            <div className="space-x-8">
              <CustomNavLink
                route="/"
                placeholder="Home"
              />
              <CustomNavLink
                route="/chat"
                placeholder="Chat"
              />
              <CustomNavLink
                route="/analysis"
                placeholder="Analysis"
              />
            </div>
          </div>

          {!userCookie ?
            <div className="flex items-center space-x-4">
              <Link to="/sign-in">
                <button className="px-4 py-2 font-medium text-black bg-gray-300 rounded-md">
                  Sign In
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="px-4 py-2 font-medium rounded-md bg-extend-secondary text-extend-primary hover:bg-extend-hoverSecondary">
                  Sign Up
                </button>
              </Link>
            </div>
          : <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarFallback className="bg-gray-300">
                    {userCookie[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white"
              >
                <DropdownMenuItem>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
