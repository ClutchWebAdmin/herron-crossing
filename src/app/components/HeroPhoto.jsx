import Image from "next/image";
import Button from "./UI/Button";

export default function HeroPhoto({
  image,
  altText,
  heading,
  subheading,
  buttonVariant,
  linkTo,
  linkText,
  icon,
}) {
  return (
    <section className="h-svh w-full relative">
      <Image
        src={image}
        alt={altText}
        className="w-full h-2/3 object-cover saturate-150"
        quality={100}
        priority
        placeholder="blur"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex w-full h-2/3 pt-[var(--mobileHeaderHeight)] lg:pt-[var(--desktopHeaderHeight) text-white">
        <h2 className="flex lg:hidden text-h2 md:text-h1 font-medium p-5 h-fit w-fit mt-auto animate__animated animate__fadeIn">
          {heading}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between w-full h-1/3 bg-primaryDark text-white p-5">
        <div className="hidden lg:flex flex-col justify-between w-full lg:w-1/2 animate__animated animate__fadeIn">
          <h2 className="text-h4 lg:text-h1 font-medium">{heading}</h2>
        </div>
        <div className="flex flex-col gap-2 justify-between w-full lg:w-1/2 h-full animate__animated animate__fadeIn">
          <h4 className="text-h5 md:text-h3 lg:text-h4 2xl:text-h3 font-medium">
            {subheading}
          </h4>
          <Button
            variant={buttonVariant}
            linkTo={linkTo}
            text={linkText}
            icon={icon}
          />
        </div>
      </div>
    </section>
  );
}
