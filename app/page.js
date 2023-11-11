"use client";

import RecordList from "./components/RecordList";
import RecordWrite from "./components/RecordWrite";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const storedItemList = JSON.parse(localStorage.getItem("itemList")) || "";
    setItemList(storedItemList);
  }, []);

  return (
    <div>
      <RecordWrite itemList={itemList} setItemList={setItemList} />
      <RecordList itemList={itemList} setItemList={setItemList} />
    </div>
  );
}
