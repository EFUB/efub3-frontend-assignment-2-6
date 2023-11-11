import styled from "styled-components";
import Image from "next/image";
import EmptyHeartImg from "../public/emptyHeart.png";
import heartImg from "../public/heart.png";
import { useState, useEffect } from "react";

export default function Card({ url, name }) {
  const [heart, setHeart] = useState(0);
  const [randomIdx, setRandomIdx] = useState(0);
  const colorList = ["#E0F8EF", "#FCF5DC", "#DDDAEF", "#DCF0FB"];

  useEffect(() => {
    setRandomIdx(Math.floor(Math.random() * 4));
  }, []);

  return (
    <S.Container bgcolor={colorList[randomIdx]}>
      <S.ImageWrapper>
        <Image src={url} alt={name} width="110" placeholder="blur" />
      </S.ImageWrapper>
      <S.Title>{name}</S.Title>
      <S.Heart onClick={() => setHeart(heart + 1)}>
        <S.HeartWrapper>
          <Image
            src={heart > 0 ? heartImg : EmptyHeartImg}
            alt="heart"
            width="20"
          />
        </S.HeartWrapper>
        <S.Count>{heart !== 0 && heart}</S.Count>
      </S.Heart>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.bgcolor};
    border-radius: 20px;
    height: 200px;
  `,
  Title: styled.h3`
    font-weight: 400;
    margin-left: 15px;
    text-align: start;
    margin-bottom: 0;
    height: 50px;
    margin-top: 0;
  `,
  Heart: styled.div`
    background-color: white;
    position: absolute;
    margin-left: 130px;
    margin-top: 155px;
    width: 50px;
    height: 50px;
    border-radius: 20px 0px 20px;
  `,
  Count: styled.p`
    font-size: 11px;
    font-weight: 600;
    color: #ed372c;
    margin: 0;
    margin-left: 21px;
  `,
  ImageWrapper: styled.div`
    margin-left: auto;
  `,
  HeartWrapper: styled.div`
    cursor: pointer;
    margin-left: 15px;
    margin-top: 10px;
  `,
};
