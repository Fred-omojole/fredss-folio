import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <main className="">
      <Hero/>
      </main>
    </>
  );
}
