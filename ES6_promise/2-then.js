export default function handleResponseFromAPI(promise) {
  // Handle promise resolution, rejection, and finally log response message
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
