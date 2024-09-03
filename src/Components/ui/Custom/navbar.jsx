import { Link, NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="px-28">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-28">
            <div className="shrink-0">
              <NavLink
                to="/"
                className="text-2xl font-bold text-gray-800"
              >
                EdChat
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
                route="/contact"
                placeholder="Contact"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/sign-in">
              <button className="rounded-md bg-gray-300 px-4 py-2 font-medium text-black">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
