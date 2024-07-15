import Logo from "./Logo";
import Link from "next/link";

export default function TheFooter() {
  return (
    <footer className="flex flex-col gap-5 w-full bg-primaryDark text-white p-5">
      <div className="flex flex-col lg:flex-row gap-10 text-h4 font-medium justify-between h-full w-full py-10 lg:py-16">
        <div className="lg:w-1/3">
          <Link
            href={`/details`}
            className="hover:text-primaryLightest transition-colors duration-200 ease-in-out"
          >
            Property Details
          </Link>
        </div>

        <div className="lg:w-1/3 lg:text-center">
          <Link
            href={`/photos`}
            className="hover:text-primaryLightest transition-colors duration-200 ease-in-out"
          >
            Photo Gallery
          </Link>
        </div>

        <div className="lg:w-1/3 lg:text-right">
          <Link
            href={`/`}
            className="hover:text-primaryLightest transition-colors duration-200 ease-in-out"
          >
            Request Info
          </Link>
        </div>
      </div>

      <div className="flex w-full border-t border-primaryMid"></div>

      <div className="flex flex-col lg:flex-row gap-10 lg:items-center w-full text-tiny pt-10 lg:pt-0">
        <div className="w-full lg:w-1/3 order-1">
          <div
            href="/"
            className="h-[80px] md:h-[120px] lg:h-[30px] w-fit mx-auto lg:mx-0"
          >
            <Logo color={`var(--white)`} />
          </div>
        </div>

        <p className="w-full lg:w-1/3 text-center order-3 lg:order-2">
          © 2024 Herron Crossing
        </p>

        <Link
          href={`/terms`}
          className="flex justify-center lg:justify-end w-full lg:w-1/3 hover:text-primaryLightest transition duration-200 ease-in-out order-2 lg:order-3"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
