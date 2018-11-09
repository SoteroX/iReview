var userID = localStorage.getItem("appToken");

export const setCurrentUser = payload => {
  return (dispatch, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userID)
      .set({
        ...payload
      })
      .then(() => {
        dispatch({ type: "SET_CURRENT_USER", payload });
      })
      .catch(err => console.log("err: ", err));
  };
};

export const settingLoggedInToken = payload => {
  return (dispatch, { getFirestore }) => {};
};
