"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { navLinks } from "../data/NavLinks";

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
    <nav className="flex flex-row items-center w-full lg:hidden">
      <div
        className={
          isMenuOpen ? "hidden" : "flex flex-row w-full gap-5 items-center"
        }
      >
        <button
          onClick={toggleMenu}
          className="underline underline-offset-4 hover-underline w-fit ml-auto"
        >
          <RiMenuFill className="text-4xl" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 m-0 h-full w-full bg-primaryDark text-white z-[9000] animate__animated animate__slideInRight animate__fast 2xl:animate__faster">
          <div className="flex flex-col gap-10 h-full justify-between items-start p-5">
            <div className="flex flex-row w-full gap-5 justify-between items-start">
              <div className="h-[50px] w-auto">
                <Logo color={`var(--white)`} />
              </div>
              <button
                onClick={toggleMenu}
                className="z-[9991] underline underline-offset-4 hover-underline"
              >
                <RiCloseFill className="text-4xl" />
              </button>
            </div>

            <div className="flex flex-col gap-5 h-full">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.linkTo}
                  onClick={toggleMenu}
                  className="text-4xl md:text-7xl xl:text-7xl 2xl:text-8xl hover:text-clutchBlue-700 transition duration-300"
                >
                  {item.text}
                </Link>
              ))}
              <a
                href="mailto:info@traditionrep.com?Subject=Requesting%more%info%for%Herron%Crossing"
                onClick={toggleMenu}
                className="text-4xl md:text-7xl xl:text-7xl 2xl:text-8xl hover:text-clutchBlue-700 transition duration-300"
              >
                Request Info
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
