import Link from "next/link";

export default function Button({ variant, linkTo, text, icon, isLight }) {
  if (isLight) {
    if (variant === "button") {
      return (
        <Link
          href={linkTo}
          className="w-fit h-fit bg-transparent text-primaryDark rounded-full text-lg px-10 py-2 font-medium border border-transparent hover:border-primaryDark hover:bg-transparent hover:text-primaryDark transition-colors duration-200 ease-in-out"
        >
          {text}
        </Link>
      );
    } else if (variant === "circle") {
      return (
        <Link
          href={linkTo}
          className="flex items-center justify-center h-12 w-12 bg-black rounded-full text-lg font-medium border border-transparent hover:border-primaryDark hover:bg-transparent hover:text-primaryDark transition-colors duration-200 ease-in-out"
        >
          {icon}
        </Link>
      );
    } else if (variant === "double") {
      return (
        <div className="flex flex-row gap-1 h-fit w-fit">
          <Link
            href={linkTo}
            className="flex items-center justify-center w-fit h-12 bg-black text-white rounded-full text-lg px-10 font-medium border border-transparent hover:bg-transparent hover:border-primaryDark hover:text-primaryDark transition-colors duration-200 ease-in-out"
          >
            {text}
          </Link>
          <Link
            href={linkTo}
            className="flex items-center justify-center h-23 w-12 bg-black text-white rounded-full text-lg aspect-square font-medium border border-transparent hover:bg-transparent hover:border-primaryDark hover:text-primaryDark transition-colors duration-200 ease-in-out"
          >
            {icon}
          </Link>
        </div>
      );
    }
  } else {
    if (variant === "button") {
      return (
        <Link
          href={linkTo}
          className="w-fit h-fit bg-black text-white rounded-full text-lg px-10 py-2 font-medium border border-transparent hover:border-white hover:bg-transparent transition-colors duration-200 ease-in-out"
        >
          {text}
        </Link>
      );
    } else if (variant === "circle") {
      return (
        <Link
          href={linkTo}
          className="flex items-center justify-center h-12 w-12 bg-black rounded-full text-lg font-medium border border-transparent hover:border-white hover:bg-transparent transition-colors duration-200 ease-in-out"
        >
          {icon}
        </Link>
      );
    } else if (variant === "double") {
      return (
        <div className="flex flex-row gap-1 h-fit w-fit">
          <Link
            href={linkTo}
            className="flex items-center justify-center w-fit h-12 bg-black text-white rounded-full text-lg px-10 font-medium border border-transparent hover:border-white hover:bg-transparent transition-colors duration-200 ease-in-out"
          >
            {text}
          </Link>
          <Link
            href={linkTo}
            className="flex items-center justify-center h-23 w-12 bg-black text-white rounded-full text-lg aspect-square font-medium border border-transparent hover:border-white hover:bg-transparent transition-colors duration-200 ease-in-out"
          >
            {icon}
          </Link>
        </div>
      );
    }
  }
}
