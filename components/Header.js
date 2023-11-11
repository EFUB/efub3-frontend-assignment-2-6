import calender from "../public/calender.png";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  const currentDate = new Date();
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

  // 크리스마스까지 남은 일수 계산
  const timeDiff = christmasDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <>
      <S.Container>
        <Image src={calender} alt="calender" width="100" />
        <S.Title>D-{daysRemaining}</S.Title>
      </S.Container>
      <S.Description>Before Christmas</S.Description>
    </>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 375px;
  `,
  Title: styled.h1`
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
  `,
  Description: styled.p`
    margin: 0;
    position: absolute;
    top: 80px;
    margin-left: -40px;
    color: #7f8089;
  `,
};
