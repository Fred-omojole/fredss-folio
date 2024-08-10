import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      {" "}
      <div className="cursor-pointer outline-none" onClick={handleClick}>
        <RiMenu2Fill className="text-3xl font-semibold" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } z-20 fixed w-full px-5 py-10  bottom-0 top-0 bg-[#171411]`}
      >
        <div className="w-full flex justify-end" onClick={handleClick}>
          <RiCloseLargeFill className="text-3xl font-semibold" />
        </div>
      </aside>
    </>
  );
};

export default NavMobile;
