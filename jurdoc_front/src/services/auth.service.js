import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

const defaultState = {
  isAuth: false
}

class AuthService {

  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        if (response.data.result.token) {

          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("isAuth", true);
          console.log(localStorage);
        }
        console.log(response.data.result);
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem('isAuth');
    localStorage.setItem("isAuth", false);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
