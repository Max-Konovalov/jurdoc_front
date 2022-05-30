export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    console.log('Bearer ' + token);
    return {
      Authorization: 'Bearer ' + token

    }; // for Spring Boot back-end
    } else {
    return {};
  }
}
