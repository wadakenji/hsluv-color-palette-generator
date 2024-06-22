import { useMemo, useState } from 'react';
import {
  getSearchParamsValue,
  setSearchParams,
} from '../../utils/searchParams';
import { validateLightnessSearchParams } from '../../helpers/validateSearchParams';
import { INITIAL_LIGHTNESS_VALUE } from '../../constants/initialValue';
import { LIGHTNESS_SEARCH_PARAMS_KEY } from '../../constants/searchParamsKey';

export const useLightness = () => {
  const initialLightnessValue = useMemo(() => {
    const searchParamsSaturation = getSearchParamsValue(
      LIGHTNESS_SEARCH_PARAMS_KEY,
    );
    if (validateLightnessSearchParams(searchParamsSaturation))
      return Number(searchParamsSaturation);
    else return INITIAL_LIGHTNESS_VALUE;
  }, []);

  const [lightness, setLightness] = useState(initialLightnessValue);

  const setLightnessWrapper = (value: number) => {
    if (value > 100) setLightness(100);
    else if (value < 0) setLightness(0);
    else {
      setLightness(value);
      setSearchParams(LIGHTNESS_SEARCH_PARAMS_KEY, String(value));
    }
  };

  return { lightness, setLightness: setLightnessWrapper };
};
