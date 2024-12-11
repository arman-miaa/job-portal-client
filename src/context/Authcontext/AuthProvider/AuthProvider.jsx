import { useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.init";
import { div } from "motion/react-client";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          // console.log('state capture', currectUser);
          setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signOutUser,
      signInWithGoogle,
    };
    return (
      <div>
        {loading ? (
          <p className="h-screen flex items-center justify-center">loading....</p>
        ) : (
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>
        )}
      </div>
    );
};

export default AuthProvider;