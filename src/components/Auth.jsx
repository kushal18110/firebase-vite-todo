import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

const Auth = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };
  const closeHandler = () => {
    setMenu(false);
  };
  const signInHandler = async () => {
    await signInWithPopup(auth, googleProvider);
    setMenu(false);
  };
  const signOutHandler = async () => {
    await signOut(auth);
    setMenu(false);
  };
  return (
    <div className=" flex items-center gap-2 ">
      
      <div className="   right-0 top-0">
        <div className="relative  ">
          {!menu ? (
            <FcMenu className="" onClick={menuHandler} size={25}></FcMenu>
            ) : (
              <GrClose className="" onClick={menuHandler} size={25}/>
              )}
        </div>
        <div className="">
          {menu ? (
            <div className="flex flex-col gap-2 absolute">
              {auth.currentUser ? null : <button className=" border-b-2 pb-1" onClick={signInHandler}>
                Sign In
              </button>}
              
              <button className="  border-b-2 pb-1" onClick={signOutHandler}>
                Sign Out
              </button>
              {auth.currentUser ? auth.currentUser.displayName:null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Auth;
