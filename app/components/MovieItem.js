"use client";

import Image from "next/image";
import { useState } from "react";
import filledHeart from "../../public/heart_fill.png";
import heart from "../../public/heart.png";

export default function MovieItem({ movie }) {
  const [likeIcon, setLikeIcon] = useState(heart);

  const handleHeartClick = () => {
    if (likeIcon === heart) {
      setLikeIcon(filledHeart);
    } else {
      setLikeIcon(heart);
    }
  };

  return (
    <div className="movie-wrapper">
      <Image src={likeIcon} className="heart" onClick={handleHeartClick} />
      <Image src={movie.src} className="movie-img" />
      <div className="movie-name">{movie.name}</div>
    </div>
  );
}
