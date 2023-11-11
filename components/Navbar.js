"use client";

import Link from "next/link";
import { Animals } from "@/app/page";

export default function Navbar() {
  return (
    <div className="navbar">
      {Animals.map((subject, index) => (
        <Link key={index} href={`/photo/${index}`}>
          {subject}
        </Link>
      ))}
    </div>
  );
}
