import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext();

const ProviderContext = ({ children }) => {
    //toast
    const notify = () => toast.success("Successfully Registered");
    const notify1 = () => toast.success("Successfully LogOut");
    const auth=getAuth(app);
    const [User,setUser]=useState(null);
    const [Loader,setLoader]=useState(true);
    //create user
    const CreateUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //sign in
    const LogIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //log out
    const LogOut=()=>{
        setLoader(true);
        return signOut(auth);
    }
    //onauthStateChange
    useEffect(()=>{
        const Unsubscribe=()=>{
            onAuthStateChanged(auth,CurrentUser=>{
                console.log(CurrentUser);
                setUser(CurrentUser);
                setLoader(false);


            })
        }
        return ()=>{
            Unsubscribe();
        }
    },[auth])
  const AuthInfo = {
    User,
    CreateUser,
    LogIn,
    LogOut,
    notify,
    notify1,
    Loader,

  };
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
        <Toaster></Toaster>
    </AuthContext.Provider>
  );
};
ProviderContext.propTypes={
    children:PropTypes.node
}
export default ProviderContext;
