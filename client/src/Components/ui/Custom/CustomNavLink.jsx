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
            'text-extend-secondary border-extend-secondary border-b-2 '
          : 'text-extend-text hover:text-extend-secondary'
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
