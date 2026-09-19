export function taskFirst() {
  // Use const because the variable value will not change
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Use let because the variable value will be modified
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
