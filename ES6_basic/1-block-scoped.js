export default function taskBlock(trueOrFalse) {
  // Define the outer variables with const
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // These variables are block-scoped and only exist inside this if statement
    const task = true;
    const task2 = false;
  }

  // Return the outer variables to ensure the correct output for both test cases
  return [task, task2];
}
