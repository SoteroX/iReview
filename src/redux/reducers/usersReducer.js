import { CREATE_USER } from "../actions/usersAction";

const initState = {
  appTokenKey: null,
  user: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("user created: ", action.payload);
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
