"use client";

import { useEffect, useState } from "react";

import NavBar from "@/components/NavBar";
import { itemList } from "@/components/itemList";
import ItemBox from "@/components/ItemBox";

import Image from "next/image";

import style from "./page.module.css";
import ic_versus from "../../public/ic_versus.png";

export default function WorldCupPage() {
  const [status, setStatus] = useState("4강"); // 현재 라운드
  const [contents, setContents] = useState([]); // 한 라운드에서 토너먼트 진행할 요소들
  const [winners, setWinners] = useState([]); // 한 라운드에서 선택받은 요소들

  useEffect(() => {
    // 처음 시작할 때 랜덤하게 섞어줌
    setContents(itemList.sort(() => Math.random() - 0.5));
  }, []);

  const onClickItem = (item) => {
    // 결승일 경우 고른 item이 최종 우승
    if (status === "결승") {
      alert(`당신의 최애 맛은 ${item.title}입니다!`);
    }
    // 남은 content 개수가 2개이면서 winner 목록이 있을 때 === 해당 라운드 마지막 매치
    if (contents.length === 2 && winners.length > 0) {
      setContents([...winners, item]); // 마지막 매치 때 고른 item과 함께 winner목록들을 다음 라운드 content에 추가
      setWinners([]); // winner 목록 초기화
      setStatus(
        status === "4강" ? "준결승" : status === "준결승" ? "결승" : "최종"
      ); // 라운드 바꿔주기
    } else if (contents.length > 2) {
      // 마지막 매치가 아닐 때
      setWinners((prevWinners) => [...prevWinners, item]); // 고른 item winner 목록에 추가
      setContents(contents.slice(2)); // 이미 지나간 라운드 요소는 지워줌
    }
  };

  return (
    <>
      <NavBar />
      <div className={style.mainDiv}>
        <div className={style.title}>베스킨라빈스 최애 맛 월드컵</div>
        <div>당신의 최애 맛에 투표하세요!</div>
        <div className={style.status}>{status}</div>

        {contents.length > 0 && (
          <div className={style.subDiv}>
            <ItemBox item={contents[0]} onClickItem={onClickItem} />
            <Image src={ic_versus} alt="versus" width="50" height="50" />
            <ItemBox item={contents[1]} onClickItem={onClickItem} />
          </div>
        )}
      </div>
    </>
  );
}
