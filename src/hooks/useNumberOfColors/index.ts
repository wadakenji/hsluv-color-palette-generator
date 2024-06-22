import { useMemo, useState } from 'react';
import { getSearchParamsValue } from '../../utils/searchParams';
import { validateNumberOfColorsSearchParams } from '../../helpers/validateSearchParams';
import { INITIAL_NUMBER_OF_COLORS } from '../../constants/initialValue';

export const useNumberOfColors = () => {
  const initialNumberOfColors = useMemo(() => {
    const searchParamsNumberOfColors = getSearchParamsValue('number-of-colors');
    if (validateNumberOfColorsSearchParams(searchParamsNumberOfColors))
      return Number(searchParamsNumberOfColors);
    else return INITIAL_NUMBER_OF_COLORS;
  }, []);

  const [numberOfColors, setNumberOfColors] = useState(initialNumberOfColors);

  const setNumberOfColorsWrapper = (value: number) => {
    if (value < 1) setNumberOfColors(1);
    else setNumberOfColors(Math.round(value));
  };

  return { numberOfColors, setNumberOfColors: setNumberOfColorsWrapper };
};
