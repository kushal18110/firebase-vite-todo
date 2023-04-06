import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

const Auth = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(true);
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
    <div className=" relative flex items-center  justify-end gap-2 ">
      <div className=" absolute top-0 right-20">
        {auth.currentUser ? auth.currentUser.displayName:null}
      </div>
      <div className=" absolute right-0 top-0">
        <div className=" ">
          {!menu ? (
            <FcMenu className="" onClick={menuHandler} size={20}></FcMenu>
          ) : (
            <GrClose className="" onClick={closeHandler} />
          )}
        </div>
        <div className="">
          {menu ? (
            <div className="flex flex-col gap-2">
              <button className=" border-b-2 pb-1" onClick={signInHandler}>
                Sign In
              </button>
              <button className="  border-b-2 pb-1" onClick={signOutHandler}>
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Auth;
