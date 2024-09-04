import PropTypes from 'prop-types';

export function TypographySmall({ text }) {
  return <small className="text-sm font-medium leading-none ">{text}</small>;
}

TypographySmall.propTypes = {
  text: PropTypes.string.isRequired,
};
