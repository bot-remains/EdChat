import PropTypes from 'prop-types';

export function TypographyH4({ text }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}

TypographyH4.propTypes = {
  text: PropTypes.string.isRequired,
};
