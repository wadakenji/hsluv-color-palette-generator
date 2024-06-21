import { FC } from 'react';
import { Hsluv } from 'hsluv';

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

  return <div className="w-36 h-36">{hsluv.hex}</div>;
};

export default ColorSwatch;
