import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

const UserContext = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUsers=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const verificationHandle=()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const updateProfileHandle=(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }

    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user
            toast.success('Successfull !' ,{autoClose:700})
        })
        .catch((error=>toast.error(error.message , {autoClose:700})))
    }

    const signWithGithub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const user = result.user
            toast.success('Successfull !' ,{autoClose:700})
        })
        .catch((error=>toast.error(error.message , {autoClose:700})))
    }

    const logOutHandle=()=>{
        signOut(auth)
        .then(()=>{
            setUser("")
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const value ={
        user ,
        loading,
        createUsers ,
        verificationHandle ,
        updateProfileHandle ,
        userSignIn ,
        signWithGoogle ,
        signWithGithub ,
        logOutHandle
        }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;