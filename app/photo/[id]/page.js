"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import HomeButton from "@/components/HomeButton";

export default function Detail() {
  const params = useParams();
  const id = params.id;
  //이미지 lazy loading & 사이즈 최적화 & layout shift 방지를 해줍니다.
  return (
    <div className={"card"}>
      {Number(id) === 0 ? (
        <Image src="/cat.png" alt={"고양이"} width={300} height={200} />
      ) : Number(id) === 1 ? (
        <Image src="/dog.avif" alt={"고양이"} width={300} height={300} />
      ) : (
        <Image src="/hamster.avif" alt={"햄스터"} width={400} height={300} />
      )}
      <div className="flex_container">
        <LikeButton />
        <HomeButton />
      </div>
    </div>
  );
}
