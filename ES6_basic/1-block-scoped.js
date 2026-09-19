export default function taskBlock(trueOrFalse) {
  // Use let for variables that will change their values
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Reassign the outer variables directly without redeclaring them
    task = true;
    task2 = false;
  }

  return [task, task2];
}
