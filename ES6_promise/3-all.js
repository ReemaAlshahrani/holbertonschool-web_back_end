import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Resolve multiple promises concurrently and log combined user profile details or error message
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
