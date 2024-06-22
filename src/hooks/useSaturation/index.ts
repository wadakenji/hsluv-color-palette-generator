import { useMemo, useState } from 'react';
import {
  getSearchParamsValue,
  setSearchParams,
} from '../../utils/searchParams';
import { INITIAL_SATURATION_VALUE } from '../../constants/initialValue';
import { validateSaturationSearchParams } from '../../helpers/validateSearchParams';

export const useSaturation = () => {
  const initialSaturationValue = useMemo(() => {
    const searchParamsSaturation = getSearchParamsValue('saturation');
    if (validateSaturationSearchParams(searchParamsSaturation))
      return Number(searchParamsSaturation);
    else return INITIAL_SATURATION_VALUE;
  }, []);

  const [saturation, setSaturation] = useState(initialSaturationValue);

  const setSaturationWrapper = (value: number) => {
    if (value > 100) setSaturation(100);
    else if (value < 0) setSaturation(0);
    else setSaturation(value);
  };

  const setSearchParamsSaturation = () =>
    setSearchParams('saturation', String(saturation));

  return {
    saturation,
    setSaturation: setSaturationWrapper,
    setSearchParamsSaturation,
  };
};
