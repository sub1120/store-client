import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const auth = getAuth();

  const result = await signInWithPopup(auth, provider);
  try {
    // The signed-in user info.
    const token = await result.user.getIdToken();

    return { token };
  } catch (error) {
    // Handle Errors here.
    console.log(error);
    throw error;
  }
};

const logout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    console.log("logged out");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAuthStatus = (func) => {
  const auth = getAuth();
  onAuthStateChanged(auth, func);
};

export { signInWithGoogle, logout, getAuthStatus };
