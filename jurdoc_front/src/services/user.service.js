import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/user';

class UserService {
  addUser(email,
          firstName,
          id,
          lastName,
          middleName,
          password,
          role,
          username) {
    return axios
        .post(API_URL, {
          email,
          firstName,
          id,
          lastName,
          middleName,
          password,
          role,
          username

        })
        .then(response => {
          if (response.data) {
            console.log(response.data.result);
          }

          return response.data;
        });
  }

  // getUser() {
  //   return axios.get(API_URL, {{headers: authHeader()}, {'page': 0, 'size': 20}}
  //   );
  // }

  getUserRoles() {
    return axios.get(API_URL + '/roles', {headers: authHeader()}
    );
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
