export const getNaverMapUrl = (query: string) => {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
};
