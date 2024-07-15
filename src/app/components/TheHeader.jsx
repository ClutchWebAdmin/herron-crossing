import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
import NavLink from "./UI/NavLink";
import { navLinks } from "../data/NavLinks";

export default function TheHeader() {
  return (
    <header>
      <nav
        className={`absolute top-0 z-50 flex flex-row w-full p-5 items-center bg-white`}
      >
        <Link href="/" className="lg:w-1/6 h-[40px]">
          <Logo color={`var(--primaryDark)`} />
        </Link>

        <div className={`hidden lg:flex lg:invisible lg:w-2/6`}></div>
        <div className="hidden lg:flex flex-row items-center justify-between w-3/6">
          {navLinks.map((item, index) => (
            <NavLink key={index} linkTo={item.linkTo} text={item.text} />
          ))}
          <Link
            href="/"
            className="w-fit h-fit bg-transparent text-primaryDark rounded-full text-lg px-10 py-2 font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
          >
            Request info
          </Link>
        </div>

        <Menu />
      </nav>
    </header>
  );
}
