export default (state = "loading", action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return action.payload;
    default:
      return state;
  }
};
