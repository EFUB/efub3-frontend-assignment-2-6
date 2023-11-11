"use client";

import React, { useState } from "react";

function page(props) {
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h1>Counter</h1>
      <div>토마토: {count[0]}</div>
      <button
        onClick={() => {
          let newCount = [...count];
          newCount[0]++;
          setCount(newCount);
        }}
      >
        +
      </button>
      <div>복숭아: {count[1]}</div>
      <button
        onClick={() => {
          let newCount = [...count];
          newCount[1]++;
          setCount(newCount);
        }}
      >
        +
      </button>
      <div>포도: {count[2]}</div>
      <button
        onClick={() => {
          let newCount = [...count];
          newCount[2]++;
          setCount(newCount);
        }}
      >
        +
      </button>
    </div>
  );
}

export default page;
