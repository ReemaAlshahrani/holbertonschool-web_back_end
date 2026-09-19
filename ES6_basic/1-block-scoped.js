export default function taskBlock(trueOrFalse) {
  // Define base variables with let to keep them scoped to the function
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Define block-scoped variables so they don't overwrite the outer variables
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
