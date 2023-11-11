"use client";

import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RecordDetail({ id }) {
  const router = useRouter();
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  useLayoutEffect(() => {
    const storedItemList = JSON.parse(localStorage.getItem("itemList")) || "";
    setItemList(storedItemList);

    const record = storedItemList.find((item) => item.id == id);
    if (record) {
      setSelectedItem(record);
    }
    console.log(id);
  }, [id]);

  const handleDeleteClick = () => {
    const newItemList = itemList.filter((item) => item.id != id);
    localStorage.setItem("itemList", JSON.stringify(newItemList));
    router.push("/");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button onClick={() => router.push("/")}>홈으로</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
      <p>{selectedItem?.text}</p>
      <div style={{ position: "relative", width: "900px", height: "600px" }}>
        {selectedItem?.image && (
          <Image
            src={selectedItem.image}
            alt="pic"
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </div>
    </div>
  );
}
