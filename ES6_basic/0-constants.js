// taskFirst uses const because the value is fixed and will not be reassigned
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

// taskNext uses let because the variable value will change when we append text to it
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
