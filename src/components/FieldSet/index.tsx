import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  className?: string;
};

const FieldSet: FC<PropsWithChildren<Props>> = ({
  label,
  className,
  children,
}) => {
  return (
    <>
      <label className={twMerge('max-w-full', className)}>
        <span className="block font-bold text-lg mb-2">{label}</span>
        {children}
      </label>
    </>
  );
};

export default FieldSet;
