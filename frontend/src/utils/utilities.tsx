export const formatStringToLocaleDateString = (tickItem: string): string =>
  new Date(tickItem).toLocaleDateString();
export const formatStringToNumber = (str: string | null): number =>
  str != null ? Math.round(parseFloat(str) * 100) / 100 : 0;
