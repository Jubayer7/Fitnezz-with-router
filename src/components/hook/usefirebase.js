import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, } from 'react';
import initializeAuth from "../../firebase/firebase.init";


initializeAuth();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch((error) => setError(error.message))
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }


    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return {
        user,
        handleUserRegister,
        signInUsingGoogle,
        handleUserLogin
    }
}

export default useFirebase;