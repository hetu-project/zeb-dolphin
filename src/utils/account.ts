export const messageStorageSortKey = (a: string, b: string) => {
  return a < b ? `${a}_${b}` : `${b}_${a}`;
};