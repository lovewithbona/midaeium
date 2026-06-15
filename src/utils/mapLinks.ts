export const getGoogleMapUrl = (academyName: string, address: string) => {
  const query = `${academyName} ${address}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

export const getOpenStreetMapUrl = (academyName: string, address: string) => {
  const query = `${academyName} ${address}`;
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`;
};
