import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const { createContext, useContext, useEffect, useState } = require("react");

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("user cred", user);
      if (user) {
        const ref = doc(db, "users", user.uid);
        const res = await getDoc(ref);
        setUser({
          uid: user.uid,
          ...res.data(),
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      const ref = doc(db, "users", data?.user?.uid);
      const res = await getDoc(ref);
      return { data: { ...res.data(), id: data?.user?.uid }, isSuccess: true };
    } catch (error) {
      console.log("error when login", error?.code);
      return {
        message:
          error?.code === "auth/invalid-login-credentials"
            ? "Invalid login credentials"
            : "Something went wrong",
        isSuccess: false,
      };
    }
  };

  const signUp = async (values) => {
    const res = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    // .then(async (userCredential) => {
    //   const user = userCredential.user;
    //   const userRef = doc(db, "users", user.uid);
    //   const data = {
    //     firstName: values?.firstName,
    //     lastName: values?.lastName,
    //     // phone: values?.phone,
    //     email: values?.email,
    //     active: true,
    //   };
    //   await setDoc(userRef, data, { merge: true });
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });

    const user = userCredential.user;
    const userRef = doc(db, "users", user.uid);
    const data = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      // phone: values?.phone,
      email: values?.email,
      active: true,
    };
    await setDoc(userRef, data, { merge: true });
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
