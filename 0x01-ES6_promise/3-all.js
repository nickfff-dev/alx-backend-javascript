import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([pRes, uRes]) => console.log(pRes.body, uRes.firstName, uRes.lastName))
    .catch(() => {
      console.log('Signup system offline');
    });
}
