import PropTypes from 'prop-types';

export function TypographyP({ text }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}

TypographyP.propTypes = {
  text: PropTypes.string.isRequired,
};
