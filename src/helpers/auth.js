import { firebaseAuth, googleProvider } from "../config/firebase";

export function loginWithGoogle() {
  return firebaseAuth().signInWithRedirect(googleProvider);
}

export function logout() {
  return firebaseAuth().signOut();
}
