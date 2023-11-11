"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <S.Container>
      <S.BoxImage src="/box.png" />
      <S.Title>
        Santa Claws <br />
        is coming to town
      </S.Title>
      <S.Description>
        Create wishlists and send gifts <br />
        to your loved ones!
      </S.Description>
      <Link href={"/shop"} style={{ textDecoration: "none" }}>
        <S.Button>Get Started</S.Button>
      </Link>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BoxImage: styled.img`
    width: 375px;
  `,
  Title: styled.h1`
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
  `,
  Description: styled.p`
    color: #7f8089;
    font-weight: 400;
    text-align: center;
  `,
  Button: styled.button`
    margin-top: 62px;
    display: flex;
    width: 343px;
    padding: 20px 121px 20px 122px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: none;
    color: white;
    background: var(--Primary, #ed372c);
    box-shadow: 0px 19px 48px 0px rgba(237, 55, 44, 0.25);
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  `,
};
