import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";

export default function TheHeader() {
  return (
    <header>
      <nav
        className={`absolute top-0 z-50 flex flex-row  w-full p-5 items-center bg-white text-primaryDark`}
      >
        <Link href="/" className="lg:w-1/5 h-[40px]">
          <Logo color={`var(--primaryDark)`} />
        </Link>

        <div className={`hidden lg:flex lg:invisible lg:w-1/5`}></div>
        <div className={`hidden lg:flex lg:w-1/5 text-center`}>
          <Link
            href="/details"
            className={`w-full py-2 font-medium bg-transparent transition-all duration-200 ease-in-out hover:bg-primaryLight border-primaryLight hover:border-primaryLight border-l-2 hover:text-white`}
          >
            Details
          </Link>
        </div>
        <div className={`hidden lg:flex lg:w-1/5 text-center`}>
          <Link
            href="/photos"
            className={`w-full py-2 font-medium bg-transparent transition-all duration-200 ease-in-out hover:bg-primaryLight border-primaryLight hover:border-primaryLight border-l-2 hover:text-white`}
          >
            Photos
          </Link>
        </div>
        <div className={`hidden lg:flex lg:w-1/5 text-center`}>
          <Link
            href="/"
            className={`w-full py-2 font-medium bg-transparent transition-all duration-200 ease-in-out hover:bg-primaryLight border-primaryLight hover:border-primaryLight border-l-2 border-r-2 hover:text-white`}
          >
            Request Info
          </Link>
        </div>

        <Menu />
      </nav>
    </header>
  );
}
