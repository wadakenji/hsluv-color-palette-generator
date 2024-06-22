import { FC } from 'react';
import { Hsluv } from 'hsluv';
import { twJoin } from 'tailwind-merge';

type Props = {
  hue: number;
  saturation: number;
  lightness: number;
};

const ColorSwatch: FC<Props> = ({ hue, saturation, lightness }) => {
  const hsluv = new Hsluv();
  hsluv.hsluv_h = hue;
  hsluv.hsluv_s = saturation;
  hsluv.hsluv_l = lightness;
  hsluv.hsluvToHex();

  const hex = hsluv.hex;

  const onClick = () => navigator.clipboard.writeText(hex);

  return (
    <div
      className="w-24 h-24 md:w-36 md:h-36 flex justify-center items-center cursor-pointer transition hover:scale-105"
      style={{ backgroundColor: hex }}
      onClick={onClick}
    >
      <span
        className={twJoin(
          'font-bold',
          lightness > 68 ? 'text-black' : 'text-white',
        )}
      >
        {hex}
      </span>
    </div>
  );
};

export default ColorSwatch;
