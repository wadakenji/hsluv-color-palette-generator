import { useMemo, useState } from 'react';
import { throttle } from 'throttle-debounce';
import {
  getSearchParamsValue,
  setSearchParams,
} from '../../utils/searchParams';
import { INITIAL_SATURATION_VALUE } from '../../constants/initialValue';
import { validateSaturationSearchParams } from '../../helpers/validateSearchParams';
import { SATURATION_SEARCH_PARAMS_KEY } from '../../constants/searchParamsKey';

const setSaturationSearchParams = throttle(200, (value: string) =>
  setSearchParams(SATURATION_SEARCH_PARAMS_KEY, value),
);

export const useSaturation = () => {
  const initialSaturationValue = useMemo(() => {
    const searchParamsSaturation = getSearchParamsValue(
      SATURATION_SEARCH_PARAMS_KEY,
    );
    if (validateSaturationSearchParams(searchParamsSaturation))
      return Number(searchParamsSaturation);
    else return INITIAL_SATURATION_VALUE;
  }, []);

  const [saturation, setSaturation] = useState(initialSaturationValue);

  const setSaturationWrapper = (value: number) => {
    if (value > 100) setSaturation(100);
    else if (value < 0) setSaturation(0);
    else {
      setSaturation(value);
      setSaturationSearchParams(String(value));
    }
  };

  return {
    saturation,
    setSaturation: setSaturationWrapper,
  };
};
