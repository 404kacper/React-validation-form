import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERS,
  USER_VALIDATED,
  USER_INVALIDATED
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_VALIDATED:
      return {
        ...state,
        authorizationStatus: { status: true }
      };
    case USER_INVALIDATED:
      return {
        ...state,
        authorizationStatus: { status: false }
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case SET_USERS:
      return {
        ...state
      };
    default:
      return state;
  }
};
