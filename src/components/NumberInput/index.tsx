import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  setValue: (value: number) => void;
} & Omit<
  HTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange' | 'onBlur' | 'onKeyDown'
>;

const NumberInput: FC<Props> = ({
  value: numberValue,
  setValue: setNumberValue,
  className,
  ...props
}) => {
  const [textValue, setTextValue] = useState(String(numberValue));

  const onBlur = () => {
    if (textValue === '') setNumberValue(0);
    setNumberValue(Number(textValue));
  };

  useEffect(() => {
    setTextValue(String(numberValue));
  }, [numberValue]);

  return (
    <>
      <input
        {...props}
        type="number"
        className={twMerge(
          'px-2 py-1 border border-gray-300 rounded text-center',
          className,
        )}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.currentTarget.blur();
        }}
      />
    </>
  );
};

export default NumberInput;
