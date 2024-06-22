import { useState } from 'react';

export const useSaturation = () => {
  const [saturation, setSaturation] = useState(50);

  const setSaturationWrapper = (value: number) => {
    if (value > 100) setSaturation(100);
    else if (value < 0) setSaturation(0);
    else setSaturation(value);
  };

  return { saturation, setSaturation: setSaturationWrapper };
};
