import * as RadixSlider from '@radix-ui/react-slider';
import { FC } from 'react';

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const Slider: FC<Props> = ({ value, onChange }) => {
  return (
    <RadixSlider.Root
      className="relative flex items-center h-6 w-full px-1.5"
      defaultValue={[50]}
      value={[value]}
      onValueChange={([value]) => onChange(value)}
      step={0.1}
    >
      <RadixSlider.Track className="relative bg-gray-300 h-1.5 w-full rounded-full">
        <RadixSlider.Range className="absolute bg-gray-950 h-1.5 rounded-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block w-4 h-4 bg-gray-950 rounded-full" />
    </RadixSlider.Root>
  );
};

export default Slider;
