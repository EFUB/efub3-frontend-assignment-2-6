"use client";

import { useState, useRef } from "react";

export default function RecordWrite({ itemList, setItemList }) {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [file, setFile] = useState();

  const MAX_STORAGE_SIZE_MB = 5;

  function handleUploadImage(e) {
    if (!e.target.files) {
      return;
    }

    // FileReader 객체 생성
    const reader = new FileReader();

    // 파일을 읽을 때 발생하는 이벤트
    reader.onload = (event) => {
      // 읽은 데이터를 상태에 설정
      setFile(event.target.result);
    };

    // 파일읽기
    reader.readAsDataURL(e.target.files[0]);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmitClick() {
    if (text && file) {
      const id = itemList?.length ? itemList[itemList.length - 1].id + 1 : 1;

      const newItem = {
        id: id,
        image: file,
        text: text,
      };

      // 로컬 스토리지에서 현재 데이터 가져오기
      const storedData = JSON.parse(localStorage.getItem("itemList")) || [];

      // 새로운 아이템 추가 전에 크기 확인
      const totalSizeMB = calculateTotalStorageSize(storedData.concat(newItem));

      // 최대 크기 초과 여부 확인
      if (totalSizeMB > MAX_STORAGE_SIZE_MB) {
        alert(`로컬 스토리지 크기 초과! (최대: ${MAX_STORAGE_SIZE_MB}MB)`);
        setText("");
        setFile(null);
        inputRef.current.value = "";
        return;
      }

      // 초과하지 않는 경우 itemList에 추가
      setItemList([...itemList, newItem]);
      setText("");
      setFile(null);
      inputRef.current.value = "";
      localStorage.setItem("itemList", JSON.stringify([...itemList, newItem]));
    }
  }

  // localStorage 파일 크기 확인
  function calculateTotalStorageSize(data) {
    const jsonString = JSON.stringify(data);
    const totalSizeMB = (
      new TextEncoder().encode(jsonString).length /
      (1024 * 1024)
    ).toFixed(2);
    return parseFloat(totalSizeMB);
  }

  return (
    <>
      <input
        type="file"
        id="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUploadImage}
      />
      <input
        type="text"
        id="input-text"
        onChange={handleTextChange}
        value={text}
      />
      <button onClick={handleSubmitClick}>작성하기</button>
    </>
  );
}
