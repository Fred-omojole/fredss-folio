import React from "react";
import Image from "next/image";
import { supermercado_one } from "@/app/fonts/font";

import Link from "next/link";
import base from "@/public/base.png";
const Hero = () => {
  return (
    <section className="">
      {" "}
      <div
        className={`${supermercado_one.className} flex items-center justify-between mt-4 w-full text-xl px-6 text-toned font-semibold `}
      >
        <div>
          <Image src={base} alt="nav logo" width={50} height={50} />
        </div>

        <p className="capitalize">freelance web developer & designer</p>

        <div className=" ">
          <Link
            href="https://cal.com/freddy.dev/15min"
            target="blank"
            aria-label="BOOK A CALL"
          >
            <button className="border-[2px] rounded-md px-4 py-2 border-secondary/45">
              BOOK A CALL
            </button>
          </Link>

          {/* <Link href="#work">
            <h4>WORKS</h4>
          </Link>
          <Link href="#about">
            <h4>ABOUT</h4>
          </Link>{" "}
          <Link href="#contact">
            <h4>CONTACT</h4>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
