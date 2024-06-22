import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  onChange: (value: number) => void;
} & Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'>;

const NumberInput: FC<Props> = ({ value, onChange, className, ...props }) => {
  const [textValue, setTextValue] = useState(String(value));

  useEffect(() => {
    if (textValue === '') onChange(0);

    const numberValue = Number(textValue);
    if (isNaN(numberValue)) return;

    onChange(numberValue);
  }, [textValue]);

  return (
    <>
      <input
        {...props}
        type="number"
        className={twMerge(
          'px-2 py-1 border border-gray-300 rounded',
          className,
        )}
        value={value || textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
    </>
  );
};

export default NumberInput;
