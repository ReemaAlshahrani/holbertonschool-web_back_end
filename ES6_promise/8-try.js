export default function divideFunction(numerator, denominator) {
  // Throws an error if denominator is 0, otherwise returns the division result
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
