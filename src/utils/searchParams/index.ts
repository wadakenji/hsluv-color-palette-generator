const getSearchParams = () => new URLSearchParams(window.location.search);

export const getSearchParamsValue = (key: string): string | null => {
  const searchParams = getSearchParams();
  return searchParams.get(key);
};

export const setSearchParams = (key: string, value: string) => {
  const searchParams = getSearchParams();
  searchParams.set(key, value);

  const searchParamsString = searchParams.toString();
  const pathname = window.location.pathname;
  const url = pathname + '?' + searchParamsString;

  window.history.replaceState(null, '', url);
};
