/**
 * 将一个字符串转换为symbol
 * @param identity 
 * @returns 
 */
export function symbolize(identity: string|symbol): symbol {
  return typeof identity === 'string' ? Symbol.for(identity) : identity
}

/**
 * 将一个symbol转换为字符串
 * @param symbol 
 * @returns 
 */
export function symbolStringify(symbol: symbol | string): string {
  if (typeof symbol === 'string') {
    return symbol
  }
  
  if (typeof symbol === 'symbol') {
    return Symbol.keyFor(symbol) ?? symbol.toString()
  }
  
  return String(symbol);
}