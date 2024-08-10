"use client";

import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import useBlobity from "blobity/lib/react/useBlobity";
import { blobityOptions } from "./utils/blobityConfig";
import Header from "./header/header";

export default function Home() {
  const blobityInstance = useBlobity(blobityOptions);

  return (
    <>
      <main>
        
        <Hero />
      </main>
    </>
  );
}
