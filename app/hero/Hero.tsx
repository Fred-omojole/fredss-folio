import React from "react";
import Image from "next/image";
import { supermercado_one } from "@/app/fonts/font";

import Link from "next/link";
import base from "@/public/base.png";
const Hero = () => {
  return (
    <section className="overflow-hidden w-auto h-screen">
      {" "}
      <div
        className={`${supermercado_one.className} flex items-center justify-between mt-4  text-xl p-2 text-toned font-semibold w-[95vw] mx-auto`}
      >
        <div tabIndex={0} className="rounded-full">
          <Image
            className="rounded-full"
            src={base}
            alt="nav logo"
            width={50}
            height={50}
          />
        </div>

        <p className="capitalize ">freelance web designer & developer </p>

        <div>
          <Link
            href="https://cal.com/freddy.dev/15min"
            target="blank"
            aria-label="BOOK A CALL"
          >
            <button className="border-[2px] rounded-md px-4 py-2 border-secondary/45">
              BOOK A CALL
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[80vw] h-[35vh] mx-auto mt-5  place-content-center text-center  ">
        <div className=" uppercase font-bold text-9xl tracking-wide">
          <h1>Fred-omojole </h1>
          <h1>Omoyele</h1>
        </div>
      </div>
      <div className=" mx-auto w-[90vw] h-[48vh] grid grid-cols-3 gap-4 mt-3  ">
        <div className="flex flex-col justify-between ">
          <div>
            {" "}
            <div className="p-2.5"></div>
            <div className="-ml-12">
              {" "}
              <svg
                width="60px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#8d7c66"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="-leading-4 font-semibold tracking-wider text-xl">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              eligendi quo soluta error sit earum vero amet! Porro optio odio
              unde tempora a sunt, voluptas, doloremque amet sed magnam ea.
            </p>
          </div>
          <div className="p-8"></div>
        </div>
        <div></div>
        <div className="grid place-items-end">

            <p>Available for </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
