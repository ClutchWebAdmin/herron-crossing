import { MdArrowOutward } from "react-icons/md";
import Button from "./UI/Button";

export default function HeroVideo({ media }) {
  return (
    <section className="h-svh w-full relative animate__animated animate__fadeIn animate__slow">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={media} type="video/mp4" />
        Your browser doesn not support the video tag.
      </video>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full pt-[var(--mobileHeaderHeight)] lg:pt-[var(--desktopHeaderHeight) p-5 text-white flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5 w-full h-full pt-5">
          <h1 className="flex justify-start items-start font-medium md:font-semibold text-h3 md:text-h1 lg:text-h2 2xl:text-h1 w-fit">
            Rural tranquility
          </h1>
          <div className="flex-1 lg:mt-6 lg:mb-6 2xl:mt-10 2xl:mb-8">
            <div className="flex h-full flex-col lg:flex-row">
              <div className="flex w-full lg:w-4/5 xl:w-3/5 h-1/3 lg:h-full border-l-2 border-b-2 lg:border-l-0 lg:border-b-0 lg:border-t-2 border-white"></div>
              <div className="flex w-full lg:w-1/5 xl:w-2/5 h-2/3 lg:h-full border-r-2 lg:border-r-0 lg:border-l-2 lg:border-b-2 border-white"></div>
            </div>
          </div>
          <h1 className="font-medium md:font-semibold text-h3 md:text-h1 lg:text-h2 2xl:text-h1 w-full lg:w-fit flex justify-end items-end">
            Urban convenience
          </h1>
        </div>
        <div className="flex justify-end">
          <Button
            variant={`double`}
            linkTo={"/details"}
            text={`Explore the property`}
            icon={<MdArrowOutward />}
          />
        </div>
      </div>
    </section>
  );
}
