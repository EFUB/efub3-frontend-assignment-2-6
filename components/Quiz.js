"use client";

import { React, useState } from "react";
import confetti from "canvas-confetti";
import styles from "./Quiz.module.css";

function Quiz() {
  const [count, setCount] = useState(0);

  const checkAnswer = () => {
    console.log("count", count);
    if (count === 7) {
      alert("정답입니다😊👍😍❤️❤️");
      firework();
    } else {
      alert("오답입니다😭😂😱🥲😒🤦‍♀️");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.count}>{count} 마리</div>
        <div>
          <button
            className={styles.btn}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
        <button onClick={checkAnswer} className={styles.submitBtn}>
          확인
        </button>
      </div>
    </div>
  );
}

function firework() {
  var duration = 15 * 100;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

export default Quiz;
