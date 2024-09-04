import PropTypes from 'prop-types';

export function TypographyMuted({ text }) {
  // eslint-disable-next-line tailwindcss/no-custom-classname
  return <p className="text-muted-foreground text-sm">{text}</p>;
}

TypographyMuted.propTypes = {
  text: PropTypes.string.isRequired,
};
