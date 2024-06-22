import { useState } from 'react';

export const useLightness = () => {
  const [lightness, setLightness] = useState(50);

  const setLightnessWrapper = (value: number) => {
    if (value > 100) setLightness(100);
    else if (value < 0) setLightness(0);
    else setLightness(value);
  };

  return { lightness, setLightness: setLightnessWrapper };
};
