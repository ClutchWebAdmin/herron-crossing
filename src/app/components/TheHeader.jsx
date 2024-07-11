import Link from "next/link";
import Menu from "./Menu";

export default function TheHeader() {
  return (
    <header className="flex flex-row h-fit w-full z-50">
      <nav className="w-full m-5 flex flex-row justify-between items-start">
        <Link href="/">Logo</Link>
        <Menu />
      </nav>
    </header>
  );
}
