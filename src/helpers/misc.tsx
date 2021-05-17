export function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
const re = /(\d*.\d{2})/;
export function only2Decimals(object: any,name:string='price_per_datum') {
  try{
      const a = object[name].match(re);
      object[name] = a?.[0] || object[name];

  }catch{
    // Do nothing
  }
}
