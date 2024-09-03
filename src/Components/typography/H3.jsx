import PropTypes from 'prop-types';

export function TypographyH3({ text }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}

TypographyH3.propTypes = {
  text: PropTypes.string.isRequired,
};
