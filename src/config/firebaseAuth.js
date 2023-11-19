import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const auth = getAuth();

  const result = await signInWithPopup(auth, provider);
  try {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    return { token, user };
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

export { signInWithGoogle, logout };
