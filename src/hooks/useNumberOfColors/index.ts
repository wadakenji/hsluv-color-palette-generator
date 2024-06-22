import { useState } from 'react';

export const useNumberOfColors = () => {
  const [numberOfColors, setNumberOfColors] = useState(6);

  const setNumberOfColorsWrapper = (value: number) => {
    if (value < 0) setNumberOfColors(0);
    else setNumberOfColors(Math.round(value));
  };

  return { numberOfColors, setNumberOfColors: setNumberOfColorsWrapper };
};
