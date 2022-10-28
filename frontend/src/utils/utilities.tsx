export const formatStringToLocaleDateString = (tickItem: string) =>
  new Date(tickItem).toLocaleDateString();
export const formatStringToNumber = (str: string | null) =>
  str != null ? Math.round(parseFloat(str) * 100) / 100 : 0;
