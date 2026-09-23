import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Handle multiple settled promises and return status with value or error string
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((res) => ({
    status: res.status,
    value: res.value || res.reason.toString(),
  })));
}
