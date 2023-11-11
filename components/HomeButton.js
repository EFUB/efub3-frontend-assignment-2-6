"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const route = useRouter();

  return (
    <div>
      <button
        className={"custom-button"}
        onClick={() => {
          route.push("/");
        }}
      >
        홈으로 이동
      </button>
    </div>
  );
}
