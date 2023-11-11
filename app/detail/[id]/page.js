"use client";

import { useParams } from "next/navigation";
import RecordDetail from "../../components/RecordDetail";

export default function Detail() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <RecordDetail id={id} />
    </div>
  );
}
