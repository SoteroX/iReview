import {
  todosRef,
  googlegoogleProvider,
  firebaseAuth,
  googleProvider
} from "../../config/firebase";

export const addToDo = (newToDo, uid) => async dispatch => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo);
};

export const completeToDo = (completeToDoId, uid) => async dispatch => {
  todosRef
    .child(uid)
    .child(completeToDoId)
    .remove();
};

export const fetchToDos = uid => async dispatch => {
  todosRef.child(uid).on("value", snapshot => {
    dispatch({
      type: "FETCH_TODOS",
      payload: snapshot.val()
    });
  });
};

export const fetchUser = () => dispatch => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: "FETCH_USER",
        payload: user
      });
    } else {
      dispatch({
        type: "FETCH_USER",
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  firebaseAuth()
    .signInWithPopup(googleProvider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  firebaseAuth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
