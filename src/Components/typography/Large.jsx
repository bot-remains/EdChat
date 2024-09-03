import PropTypes from 'prop-types';

export function TypographyLarge({ text }) {
  return <div className="text-lg font-semibold">{text}</div>;
}

TypographyLarge.propTypes = {
  text: PropTypes.string.isRequired,
};
