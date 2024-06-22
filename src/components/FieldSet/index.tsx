import { FC, PropsWithChildren } from 'react';

type Props = {
  label: string;
};

const FieldSet: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  return (
    <>
      <label className="max-w-full w-60">
        <span className="block font-bold text-lg mb-2">{label}</span>
        {children}
      </label>
    </>
  );
};

export default FieldSet;
