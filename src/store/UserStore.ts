import { loginUser, signUpUser } from "./../api/user";
import { flowResult, makeAutoObservable } from "mobx";
import { ms_auth, ms_main } from "../api";
import Cookies from "js-cookie";
/*
  ================================================
    USER RELATED STUFF. 
  ================================================
*/

class UserStore {
  me = null;
  token = null;
  identifiedUser = false;
  constructor() {
    makeAutoObservable(this);

    const token = Cookies.get("token");
    if (token) {
      flowResult(this.login_cookie(token)).then(() => {
        this.identifiedUser = true;
      });
      return;
    }
    this.identifiedUser = true;
  }

  get isLoggedIn() {
    return !(this.me == null);
  }

  *logout() {
    // Set all default states, remove the token, remove AuthHeader from axios
    Cookies.remove("token");
    this.token = null;
    this.me = null;

    delete ms_main.defaults.headers["Authorization"];
  }

  *signUp(props: {
    fname: string;
    lname: string;
    password: string;
    email: string;
  }) {
    try {
      const { data } = yield signUpUser(props);
      yield flowResult(this.login(props));
      return data;
    } catch (err) {
      throw err;
    }
  }
  *login_cookie(token) {
    try {
      this.token = token;
      ms_main.defaults.headers["Authorization"] = `Token ${token}`;

      this.me = {};
    } catch (err) {
      // this.logout();
    }
  }
  *login(credentials) {
    const { data } = yield loginUser(credentials);
    this.token = data.token;
    this.me = data.user;
    ms_main.defaults.headers["Authorization"] = `Bearer ${data.token}`;
    Cookies.set("token", data);
    return data;
  }
}

const store = new UserStore();

export default store;
