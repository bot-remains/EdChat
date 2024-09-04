import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CustomNavLink({ placeholder, route }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `text-[18px] font-medium
        ${
          isActive ?
            'text-blue-500 border-blue-500 border-b-2 '
          : 'text-gray-700 hover:text-blue-500'
        }`
      }
    >
      {placeholder}
    </NavLink>
  );
}
CustomNavLink.propTypes = {
  placeholder: PropTypes.string,
  route: PropTypes.string.isRequired,
};

export default CustomNavLink;
