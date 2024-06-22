import { FC } from 'react';
import NumberInput from '../NumberInput';
import Slider from '../Slider';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  setValue: (value: number) => void;
  inputId?: string;
  className?: string;
};

const InputSliderSet: FC<Props> = ({ value, setValue, inputId, className }) => {
  return (
    <>
      <span className={twMerge('flex gap-x-2 items-center', className)}>
        <NumberInput
          id={inputId}
          className="w-14"
          value={value}
          setValue={setValue}
        />
        <Slider value={value} onChange={setValue} />
      </span>
    </>
  );
};

export default InputSliderSet;
