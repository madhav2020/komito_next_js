"use client";

import Features from "@/component/Features/Features";
import News from "@/component/News/News";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-black m-0">
      <Features />
      <News />
    </main>
  );
}
