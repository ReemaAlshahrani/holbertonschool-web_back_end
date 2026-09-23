/**
 * Returns a new DataView of an ArrayBuffer with an Int8 value set at a specific position.
 * Throws an error if the position is outside the buffer range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer);
  int8View.setInt8(position, value);

  return int8View;
}
