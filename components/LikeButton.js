"use client";
import React, { useState } from "react";
import Like from "/public/good.svg";

export default function LikeButton(like) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
      className={"like-button"}
    >
      <div className={"flex-row"}>
        <Like />
        {count}
      </div>
    </button>
  );
}
