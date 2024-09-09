import { Form } from '@/Components/ui/form';
import PropTypes from 'prop-types';

function CustomFormWrapper({ form, onSubmit, fields, button }) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">{fields}</div>
        {button}
      </form>
    </Form>
  );
}
CustomFormWrapper.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
};

export default CustomFormWrapper;
