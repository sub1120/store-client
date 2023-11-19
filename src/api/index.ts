import "@/config/firebaseApp";

import {
  GoogleAuthProvider,
  NextOrObserver,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const getData = async (url: string) => {
  const options = {
    next: { revalidate: 60 },
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token") as string),
    },
  };

  const res = await fetch(`http://localhost:4000/api/v1/${url}`, options);

  const resObject = await res.json();
  return resObject.data;
};

async function getStoreData(url: string) {
  const options = {
    next: { revalidate: 60 },
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token") as string),
    },
  };

  const res = await fetch(`http://localhost:4000/api/v1/${url}`, options);

  const resObject = await res.json();
  return resObject.data;
}

const signIn = async () => {
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

const getAuthStatus = (func: NextOrObserver<User>) => {
  const auth = getAuth();
  onAuthStateChanged(auth, func);
};

const storeAPI = { getData, getStoreData, signIn, logout, getAuthStatus };

export default storeAPI;
