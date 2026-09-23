import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to handle multiple promises and return their status and value/error
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((res) => ({
    status: res.status,
    value: res.value || res.reason,
  })));
}
