export const validateSaturationSearchParams = (
  value: string | null,
): value is string => {
  if (value === null) return false;
  const numberedValue = Number(value);
  if (isNaN(numberedValue)) return false;
  if (numberedValue < 0 || 100 < numberedValue) return false;
  return true;
};
