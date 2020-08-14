export const times = (n: number, iterate: any = (x: number, i: number) => i + 1) =>
  Array(n)
    .fill('')
    .map((value, index, array) => iterate(index + 1, index, array));
