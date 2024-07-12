import Image from "next/image";

export default function Hero({ variant, media }) {
  if (variant === "video") {
    return (
      <section className="h-svh w-full relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={media} type="video/mp4" />
          Your browser doesn not support the video tag.
        </video>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full pt-[var(--mobileHeaderHeight)] lg:pt-[var(--desktopHeaderHeight) p-5 text-white">
          <div className="flex flex-col lg:flex-row gap-5 w-full h-full pt-5">
            <h1 className="flex justify-start items-start font-semibold text-h2 md:text-h1 lg:text-h2 xl:text-h1 w-fit">
              390 Acres
            </h1>
            <div className="flex-1 lg:mt-6 lg:mb-6 xl:mt-10 xl:mb-8">
              <div className="flex h-full flex-col lg:flex-row">
                <div className="flex w-full lg:w-4/5 h-1/3 lg:h-full border-l-2 border-b-2 lg:border-l-0 lg:border-b-0 lg:border-t-2 border-white"></div>
                <div className="flex w-full lg:w-1/5 h-2/3 lg:h-full border-r-2 lg:border-r-0 lg:border-l-2 lg:border-b-2 border-white"></div>
              </div>
            </div>
            <h1 className="font-semibold text-h2 md:text-h1 lg:text-h2 xl:text-h1 w-full lg:w-fit flex justify-end items-end">
              $25,000,000
            </h1>
          </div>
        </div>
      </section>
    );
  } else if (variant === "photo") {
    return (
      <section className="h-svh w-full">
        <Image
          src={media}
          alt="Alt text"
          priority
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </section>
    );
  }
}
