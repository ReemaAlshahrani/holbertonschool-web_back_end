export default function uploadPhoto(filename) {
  // Returns a rejected promise with an error indicating the file cannot be processed
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
