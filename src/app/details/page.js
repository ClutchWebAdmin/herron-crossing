import HeroPhoto from "../components/HeroPhoto";
import hero from "../../../public/images/hero.png";
import { MdArrowOutward } from "react-icons/md";
import Button from "../components/UI/Button";

export default function DetailsPage() {
  return (
    <main>
      <HeroPhoto
        image={hero}
        altText={`Turner Rd landscape`}
        heading={`Unparalleled potential`}
        subheading={`Discover a rare development opportunity with this 390-acre property within city boundaries`}
        buttonVariant={`double`}
        linkText={`View details`}
        linkTo={`#details`}
        icon={<MdArrowOutward />}
      />
      <section id="details" className="h-[700px]"></section>
    </main>
  );
}
