import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class AuthStore {
  constructor() {
    this.currentUser = localStorage.getItem("currentUser");
    this.token = localStorage.getItem("token");
    this.error = "";
  }

  signup(username, password) {
    this.storeUser(axios.post('http://localhost:8000/register/', {username, password}));
  }

  login(username, password) {
    this.storeUser(axios.post('http://localhost:8000/login/', {username, password}));
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
  }

  storeUser(promiseForUser) {
    promiseForUser
      .then(res => res.data)
      .then(({username, token}) => {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("token", token);
        this.currentUser = username;
        this.token = token;
      })
      .catch(err => this.error = err.response.data.non_field_errors[0]);
  }

  get isLoggedIn() {
    return !!this.token;
  }
}

decorate(AuthStore, {
  currentUser: observable,
  token: observable,
  error: observable,
  isLoggedIn: computed
})

export default new AuthStore();
