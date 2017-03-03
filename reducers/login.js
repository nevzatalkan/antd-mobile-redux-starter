const initialState = {
  loggedIn: false,
  username: undefined,
  password: undefined
};

export default function authentication(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        loggedIn: action.payload.loggedIn
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        username: action.payload.username,
        loggedIn: action.payload.loggedIn
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        loggedIn: action.payload.loggedIn
      };
    default:
      return state;
  }
}
