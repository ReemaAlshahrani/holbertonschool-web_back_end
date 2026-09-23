export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the math function and push the result to the queue
    queue.push(mathFunction());
  } catch (err) {
    // If an error is thrown, push the error message string to the queue
    queue.push(err.toString());
  } finally {
    // In every case, append the guardrail message to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
