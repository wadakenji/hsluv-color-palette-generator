import { FC } from 'react';
import NumberInput from '../NumberInput';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  setValue: (value: number) => void;
  inputId?: string;
  className?: string;
};

const InputButtonSet: FC<Props> = ({ value, setValue, inputId, className }) => {
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

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
          setValue={setValue}
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
