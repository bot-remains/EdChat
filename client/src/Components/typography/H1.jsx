import PropTypes from 'prop-types';

export function TypographyH1({ text }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight">
      {text}
    </h1>
  );
}

TypographyH1.propTypes = {
  text: PropTypes.string.isRequired,
};
