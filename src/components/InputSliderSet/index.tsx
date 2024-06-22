import { FC } from 'react';
import NumberInput from '../NumberInput';
import Slider from '../Slider';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const InputSliderSet: FC<Props> = ({ value, onChange, className }) => {
  return (
    <>
      <span className={twMerge('flex gap-x-2 items-center', className)}>
        <NumberInput className="w-14" value={value} onChange={onChange} />
        <Slider value={value} onChange={onChange} />
      </span>
    </>
  );
};

export default InputSliderSet;
