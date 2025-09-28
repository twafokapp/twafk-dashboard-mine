import { useEffect, useRef, type HTMLProps } from 'react';

export const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  // Apply custom styling for the checkbox
  return (
    <input
      type='checkbox'
      ref={ref}
      className={`${className} cursor-pointer h-[18px] w-[18px] appearance-none rounded bg-white border-2 border-[#01C0AA] text-[#01C0AA] checked:appearance-auto `}
      {...rest}
    />
  );
};
