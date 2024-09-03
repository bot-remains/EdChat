import PropTypes from 'prop-types';

export function TypographyH2({ text }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight first:mt-0">
      {text}
    </h2>
  );
}

TypographyH2.propTypes = {
  text: PropTypes.string.isRequired,
};
