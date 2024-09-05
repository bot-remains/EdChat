import { Link, NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';

const Navbar = () => {
  return (
    <nav className="bg-extend-primary shadow-md">
      <div className="px-28">
        <div className="flex h-16 items-center justify-between">
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
              <button className="rounded-md bg-extend-secondary px-4 py-2 font-medium text-extend-primary hover:bg-extend-hoverSecondary">
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
