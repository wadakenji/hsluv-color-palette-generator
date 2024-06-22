import { useMemo, useState } from 'react';
import { getSearchParamsValue } from '../../utils/searchParams';
import { validateLightnessSearchParams } from '../../helpers/validateSearchParams';
import { INITIAL_LIGHTNESS_VALUE } from '../../constants/initialValue';

export const useLightness = () => {
  const initialLightnessValue = useMemo(() => {
    const searchParamsSaturation = getSearchParamsValue('lightness');
    if (validateLightnessSearchParams(searchParamsSaturation))
      return Number(searchParamsSaturation);
    else return INITIAL_LIGHTNESS_VALUE;
  }, []);

  const [lightness, setLightness] = useState(initialLightnessValue);

  const setLightnessWrapper = (value: number) => {
    if (value > 100) setLightness(100);
    else if (value < 0) setLightness(0);
    else setLightness(value);
  };

  return { lightness, setLightness: setLightnessWrapper };
};
