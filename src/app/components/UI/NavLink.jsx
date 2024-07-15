import Link from "next/link";

export default function NavLink({ linkTo, text }) {
  return (
    <Link
      href={linkTo}
      className="flex text-lg text-primaryDark w-fit h-fit py-2 underline underline-offset-[6px] decoration-[1.25px] decoration-transparent hover:decoration-primaryDark font-medium transition duration-100 ease-in-out p-5"
    >
      {text}
    </Link>
  );
}
