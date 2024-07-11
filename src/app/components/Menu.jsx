"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinksArray = [
  {
    text: "Link 1",
    linkTo: "/",
  },
  {
    text: "Link 2",
    linkTo: "/",
  },
  {
    text: "Link 3",
    linkTo: "/",
  },
];

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-5 right-5 lg:top-10 lg:right-10 font-serif">
      <div className={isMenuOpen ? "hidden" : "flex flex-row"}>
        <button
          onClick={toggleMenu}
          className="underline underline-offset-4 hover-underline"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 m-0 h-full w-full bg-primaryDark text-white z-[9000] animate__animated animate__slideInRight animate__fast 2xl:animate__faster">
          <div className="flex flex-col gap-10 h-full justify-between items-start p-5 lg:p-10">
            <div className="flex flex-row w-full gap-5 justify-between items-start">
              <div className="w-full lg:w-1/2 h-auto">
                <Logo color={`var(--white)`} />
              </div>
              <button
                onClick={toggleMenu}
                className="z-[9991] underline underline-offset-4 hover-underline"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-5 h-full">
              {navLinksArray.map((item, index) => (
                <Link
                  key={index}
                  href={item.linkTo}
                  onClick={toggleMenu}
                  className="text-5xl md:text-7xl xl:text-7xl 2xl:text-8xl hover:text-clutchBlue-700 transition duration-300"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
