import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';
import * as React from 'react';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
Input.displayName = 'Input';

export { Input };