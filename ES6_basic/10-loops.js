export default function appendToEachArrayValue(array, appendString) {
  const arrayResponse = [];
  for (const value of array) {
    arrayResponse.push(appendString + value);
  }

  return arrayResponse;
}
