import { FC } from 'react';
import NumberInput from '../NumberInput';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  onChange: (value: number) => void;
  inputId?: string;
  className?: string;
};

const InputButtonSet: FC<Props> = ({ value, onChange, inputId, className }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <>
      <span className={twMerge('flex gap-x-2 items-center', className)}>
        <button
          className="w-8 h-8 border border-gray-300 bg-white rounded-full"
          onClick={decrement}
        >
          -
        </button>
        <NumberInput
          id={inputId}
          className="w-10 text-lg font-bold"
          value={value}
          onChange={onChange}
        />
        <button
          className="w-8 h-8 border border-gray-300 bg-white rounded-full"
          onClick={increment}
        >
          +
        </button>
      </span>
    </>
  );
};

export default InputButtonSet;
