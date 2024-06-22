import * as RadixSlider from '@radix-ui/react-slider';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const preventTouchMove = (event: TouchEvent) => {
  event.preventDefault();
};

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const Slider: FC<Props> = ({ value, onChange, className }) => {
  return (
    <RadixSlider.Root
      className={twMerge(
        'relative flex items-center h-6 w-full px-1.5',
        className,
      )}
      defaultValue={[50]}
      value={[value]}
      onValueChange={([value]) => onChange(value)}
      step={0.1}
    >
      <RadixSlider.Track className="relative bg-gray-300 h-1.5 w-full rounded-full">
        <RadixSlider.Range className="absolute bg-gray-950 h-1.5 rounded-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block w-4 h-4 bg-gray-950 rounded-full"
        onTouchStart={() => {
          document.addEventListener('touchmove', preventTouchMove, {
            passive: false,
          });
        }}
        onTouchEnd={() => {
          document.removeEventListener('touchmove', preventTouchMove);
        }}
      />
    </RadixSlider.Root>
  );
};

export default Slider;
