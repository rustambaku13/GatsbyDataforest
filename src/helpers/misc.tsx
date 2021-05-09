export function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
const re = /(\d*.\d{2})/;
export function only2Decimals(str: string) {
  const a = str.match(re);
  return a?.[0] || str;
}
