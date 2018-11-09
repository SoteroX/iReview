var userID = localStorage.getItem("appToken");

export const createProject = (project, movieId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("reviews")
      .doc(movieId)
      .set({
        ...project
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => console.log("err: ", err));
  };
};
