export function login(username, password) {

  if (username == "nevzat" && password == "123456") {
    return {
      type: "LOGIN_SUCCESS",
      payload: {
        username,
        loggedIn: true
      }
    }
  }
  else {
    return {
      type: "LOGIN_FAILED",
      payload: {username: "",
        loggedIn: false
      }
    }    
  }

}

export function logout() {
  return {
    type: "LOGOUT_SUCCESS",
    payload: {
      username:"",
      loggedIn: false
    }
  };
}
