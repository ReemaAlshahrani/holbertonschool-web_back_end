/**
 * Returns a boolean indicating if all elements in the array exist within the set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
