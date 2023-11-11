"use client";

import styled from "styled-components";
import ball from "../../public/ball.png";
import boots from "../../public/boots.png";
import candy from "../../public/candy.png";
import ginger from "../../public/ginger.png";
import gloves from "../../public/gloves.png";
import hat from "../../public/hat.png";
import snowBall from "../../public/snowBall.png";
import snowman from "../../public/snowman.png";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
  const cards = [
    { url: ball, name: "Christmas Ball" },
    { url: boots, name: "Christmas Ski Skates" },
    { url: candy, name: "Christmas Candies" },
    { url: ginger, name: "Sweet Ginger Bread" },
    { url: gloves, name: "Warm mittens" },
    { url: hat, name: "Santa hat" },
    { url: snowBall, name: "Christmas SnowBall" },
    { url: snowman, name: "Snowman" },
  ];

  return (
    <S.Container>
      <Header />
      <S.CardsContainer>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </S.CardsContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    font-weight: 500;
    text-align: center;
    margin-bottom: 0;
  `,
  CardsContainer: styled.div`
    max-width: 375px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 2rem;
  `,
  Description: styled.p`
    color: #7f8089;
    font-weight: 400;
    text-align: center;
  `,
};
