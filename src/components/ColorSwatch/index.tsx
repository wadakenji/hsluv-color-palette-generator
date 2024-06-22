import { FC, useState } from 'react';
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

  const [showsCopiedText, setShowsCopiedText] = useState(false);

  const onClick = () => {
    navigator.clipboard?.writeText(hex).then(() => {
      setShowsCopiedText(true);
      setTimeout(() => setShowsCopiedText(false), 1000);
    });
  };

  return (
    <div
      className="relative aspect-square color-swatch-width flex justify-center items-center cursor-pointer transition-transform hover:scale-105"
      style={{ backgroundColor: hex }}
      onClick={onClick}
    >
      <span
        className={twJoin(
          'absolute right-2 top-2 text-xs sm:text-sm bg-white rounded-full py-px px-2 duration-300',
          showsCopiedText ? 'opacity-100' : 'opacity-0',
        )}
      >
        Copied!
      </span>
      <span
        className={twJoin(
          'font-bold text-sm sm:text-base',
          lightness > 68 ? 'text-black' : 'text-white',
        )}
      >
        {hex}
      </span>
    </div>
  );
};

export default ColorSwatch;
