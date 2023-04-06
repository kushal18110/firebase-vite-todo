import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  getDocs,
  collection,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import NewList from "./NewList";

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
      setNewList('')
    }
  };

  return (
    <div>
      <div className="flex gap-2 max-w-[250px]">
        <input
          type="text"
          onChange={(event) => setNewList(event.target.value)}
          value={newlist}
          className=" bg-slate-500 rounded-md w-full"
        />
        <button onClick={addHandler} className="p-1 border-2 rounded-full">add</button>
      </div>
      <div className="">
        {list.map((lists) => (
          <NewList

            listBody={lists.body}
            deleteBody={() => deleteListHandler(lists.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainList;
