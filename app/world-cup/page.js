"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { itemList } from "@/components/itemList";
import ItemBox from "@/components/ItemBox";
import Image from "next/image";
import style from "./page.module.css";
import ic_versus from "../../public/ic_versus.png";

export default function WorldCupPage() {
  const [status, setStatus] = useState("4강");
  const [contents, setContents] = useState([]);
  const [displayNum, setDisplayNum] = useState(0);
  const [winners, setWinners] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // 현재 요소와 무작위로 선택한 요소와 자리를 바꿈
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setContents(shuffleArray(itemList));
  }, [status]);

  return (
    <>
      <NavBar />
      <div className={style.mainDiv}>
        <div className={style.title}>베스킨라빈스 최애 맛 월드컵</div>
        <div>당신의 최애 맛에 투표하세요!</div>
        <div className={style.status}>{status}</div>

        {contents.length > 0 && (
          <div className={style.subDiv}>
            <ItemBox
              item={contents[displayNum]}
              winners={winners}
              setWinners={setWinners}
            />
            <Image src={ic_versus} alt="versus" width="50" height="50" />
            <ItemBox
              item={contents[displayNum + 1]}
              winners={winners}
              setWinners={setWinners}
            />
          </div>
        )}
      </div>
    </>
  );
}
