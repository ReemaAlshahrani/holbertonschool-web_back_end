export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Return resolved object if success is true, otherwise reject with an error
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
