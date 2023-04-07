import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { FcPlus } from "react-icons/fc";
import {
  getDocs,
  collection,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import NewList from "./NewList";
import Auth from "./Auth";

const MainList = () => {
  const [list, setList] = useState([]);
  const [newlist, setNewList] = useState("");

  const collectionRef = collection(db, "lists");

  const listHandler = async () => {
    const data = await getDocs(collectionRef);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setList(filterData);
  };
  useEffect(() => {
    listHandler();
  });

  const deleteListHandler = async (id) => {
    const deleteList = doc(db, "lists", id);
    await deleteDoc(deleteList);
  };

  const addHandler = async () => {
    if (newlist === "") {
      alert("add list");
    } else {
      try {
        await addDoc(collectionRef, { body: newlist });
        listHandler();
      } catch (err) {
        console.error(err);
      }
      setNewList("");
    }
  };

  return (
    <div className=" w-[100vw] bg-cover  h-[100vh] bg-[url(https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161404.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais)]">
      <div className=" shadow-lg max-w-[350px] bg-[rgba(255,255,255,.1)] mx-auto p-1">
        <div className="flex gap-2 mx-auto max-w-[250px]">
          <input
            type="text"
            onChange={(event) => setNewList(event.target.value)}
            value={newlist}
            className=" bg-[rgba(255,255,255,.7)] shadow-lg rounded-[20px] w-full p-1"
          />
          <button onClick={addHandler} className="p-1 border-2 rounded-full">
            <FcPlus size={20} />
          </button>
          <Auth />
        </div>
        <div className="mx-auto max-w-[250px]">
          {list.map((lists) => (
            <NewList
              listBody={lists.body}
              deleteBody={() => deleteListHandler(lists.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainList;
