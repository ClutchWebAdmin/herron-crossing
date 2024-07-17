"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="lg:mt-[var(--desktopHeaderHeight)] p-3 text-center">
      <section className="flex flex-col gap-5 p-3 py-32">
        <h1 className="text-3xl font-medium lg:font-normal lg:text-5xl">
          404 Page Not Found
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p>The requested page cannot be found.</p>
          <Link
            href="/"
            className="w-fit h-fit bg-transparent text-primaryDark rounded-full text-lg px-10 py-2 font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
          >
            Go home
          </Link>
        </div>
      </section>
    </main>
  );
}
