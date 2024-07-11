import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";

export default function TheHeader({ variant }) {
  if (variant === "normal") {
    return (
      <header className="flex flex-row h-fit w-full z-50">
        <nav className="w-full m-5 lg:m-10 flex flex-row justify-between items-start">
          <Link href="/">Logo</Link>
          <Menu />
        </nav>
      </header>
    );
  } else if (variant === "absolute") {
    return (
      <header className="flex flex-row h-fit w-full z-50 text-white">
        <nav className="absolute max-w-full m-5 lg:m-10 flex flex-row justify-between items-start">
          <Link href="/" className="w-[200px]">
            <Logo color={`var(--white)`} />
          </Link>
          <Menu />
        </nav>
      </header>
    );
  }
}
