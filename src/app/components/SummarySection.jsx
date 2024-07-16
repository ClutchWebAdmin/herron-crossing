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
      className="relative flex flex-col lg:flex-row gap-10 px-5 py-10 h-full"
    >
      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <div className="flex flex-col h-full justify-between gap-20">
          <h3 className="text-h2 font-medium">{heading}</h3>
          <div className="flex flex-col gap-5 mb-10 text-h6 lg:text-h5">
            {paragraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <Button
            isLight
            variant={buttonVariant}
            linkTo={linkTo}
            text={buttonText}
            icon={buttonIcon}
          />
        </div>
      </div>
      <div className="w-full h-full sticky top-0 right-0 lg:w-1/2">
        <Image
          src={image}
          alt={altText}
          className="w-full h-auto object-cover aspect-square saturate-150"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
