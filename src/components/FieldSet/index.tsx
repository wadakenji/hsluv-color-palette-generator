import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  labelFor?: string;
  className?: string;
};

const FieldSet: FC<PropsWithChildren<Props>> = ({
  label,
  labelFor,
  className,
  children,
}) => {
  return (
    <>
      <div className={twMerge('max-w-full', className)}>
        <label htmlFor={labelFor} className="block font-bold text-lg mb-2">
          {label}
        </label>
        {children}
      </div>
    </>
  );
};

export default FieldSet;
