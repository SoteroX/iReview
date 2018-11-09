import { CREATE_PROJECT } from "../actions/projectAction";
const initState = {
  name: [
    {
      id: 0,
      rate: 0,
      name: ""
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created users: ", action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
