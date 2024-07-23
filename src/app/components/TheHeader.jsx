import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
import NavLink from "./UI/NavLink";
import { desktopNavLinks } from "../data/NavLinks";

export default function TheHeader() {
  return (
    <header>
      <nav
        className={`absolute top-0 z-50 flex flex-row w-full p-5 items-center text-white`}
      >
        <Link href="/" className="lg:w-1/6 h-[40px]">
          <Logo color={`var(--white)`} />
        </Link>

        <div className={`hidden lg:flex lg:invisible lg:w-2/6`}></div>
        <div className="hidden lg:flex flex-row items-center justify-between lg:w-4/6 xl:w-3/6">
          {desktopNavLinks.map((item, index) => (
            <NavLink key={index} linkTo={item.linkTo} text={item.text} />
          ))}
          <a
            href="mailto:info@traditionrep.com?Subject=Requesting%more%info%for%Herron%Crossing"
            target="_blank"
            className="w-fit h-fit bg-black text-white rounded-full text-lg px-10 py-2 font-medium border border-black hover:bg-transparent hover:border-white transition-colors duration-200 ease-in-out"
          >
            Request Info
          </a>
        </div>

        <Menu />
      </nav>
    </header>
  );
}
