import Image from "next/image";
import Button from "./UI/Button";

export default function SummarySection({
  heading,
  paragraphs,
  buttonVariant,
  linkTo,
  buttonText,
  buttonIcon,
  image,
  altText,
}) {
  return (
    <section
      id="summary"
      className="relative flex flex-col lg:flex-row gap-10 px-5 py-10 h-full w-full 2xl:w-4/6 mx-auto"
    >
      <div className="flex flex-col gap-10 w-full lg:w-1/2 lg:pr-20">
        <div className="flex flex-col h-full justify-between gap-20">
          <h3
            className="text-h2 font-medium"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {heading}
          </h3>
          <div
            className="flex flex-col gap-5 mb-10 text-h6"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {paragraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
            <Button
              isLight
              variant={buttonVariant}
              linkTo={linkTo}
              text={buttonText}
              icon={buttonIcon}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full sticky top-0 right-0 lg:w-1/2">
        <Image
          src={image}
          alt={altText}
          className="w-full h-auto object-cover aspect-square"
          placeholder="blur"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        />
      </div>
    </section>
  );
}
