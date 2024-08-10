import React from "react";
import Image from "next/image";
import { supermercado_one } from "@/app/fonts/font";

import Link from "next/link";
import base from "@/public/base.png";
import Navmobile from "../navMobile/NavMobile";

const Header = () => {
  return (
    <div
      className={` flex items-center justify-between just text-xl mt-4 p-4 xl:p-2 text-toned font-semibold w-[95vw] mx-auto ${supermercado_one.className}`}
    >
      <div tabIndex={0}>
        <Image className="" src={base} alt="nav logo" width={50} height={50} />
      </div>
      <Navmobile />

      <p className=" hidden xl:block capitalize ">
        freelance web designer & developer{" "}
      </p>

      <div className="hidden xl:block">
        <Link
          href="https://cal.com/freddy.dev/15min"
          target="blank"
          aria-label="BOOK A CALL"
        >
          <button className=" border-[2px] rounded-md px-4 py-2 border-secondary/45">
            BOOK A CALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
