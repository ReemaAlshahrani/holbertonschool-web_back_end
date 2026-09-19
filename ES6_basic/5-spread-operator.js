export default function concatArrays(array1, array2, string) {
  // Concatenate two arrays and spread each character of the string into a single array
  return [...array1, ...array2, ...string];
}
