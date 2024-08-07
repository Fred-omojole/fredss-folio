"use client";

import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import useBlobity from "blobity/lib/react/useBlobity";
import { blobityOptions } from "./utils/blobityConfig";

export default function Home() {
  const blobityInstance = useBlobity(blobityOptions);

  return (
    <>
      {" "}
      <Navbar />
      <main className="">
        <Hero />
      </main>
    </>
  );
}
