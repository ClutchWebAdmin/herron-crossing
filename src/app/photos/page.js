import photo1 from "../../../public/images/prison-exterior-1.png";
import photo2 from "../../../public/images/prison-exterior-2.png";
import photo3 from "../../../public/images/prison-exterior-3.png";
import photo4 from "../../../public/images/prison-exterior-4.png";
import photo5 from "../../../public/images/property-landscape-view.png";
import photo6 from "../../../public/images/greenhouse.png";
import photo7 from "../../../public/images/property-road.png";
import photo8 from "../../../public/images/concept-map-1.png";
import photo9 from "../../../public/images/concept-map-2.png";
import photo10 from "../../../public/images/concept-map-3.png";
import photo11 from "../../../public/images/concept-map-4.png";
import photo12 from "../../../public/images/concept-map-5.png";
import photo13 from "../../../public/images/aerial-view-1.png";
import photo14 from "../../../public/images/aerial-view-2.png";
import photo15 from "../../../public/images/aerial-view-3.png";
import photo16 from "../../../public/images/aerial-view-4.png";
import photo17 from "../../../public/images/aerial-view-5.png";
import photo18 from "../../../public/images/aerial-view-6.png";
import photo20 from "../../../public/images/aerial-view-8.png";
import photo21 from "../../../public/images/aerial-view-9.png";
import photo22 from "../../../public/images/aerial-view-10.png";
import photo23 from "../../../public/images/aerial-view-11.png";
import hero from "../../../public/images/photo-page-hero.png";
import HeroPhoto from "../components/HeroPhoto";
import { MdArrowOutward } from "react-icons/md";
import Carousel from "../components/Carousel";

const propertyPhotos = [
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo20,
  photo21,
  photo22,
  photo23,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
];

const conceptMaps = [photo8, photo9, photo10, photo11, photo12];

export const metadata = {
  title: "Photo Gallery | Herron Crossing",
  description: "390 acres of rural tranquility with urban convenience.",
  keywords:
    "Salem oregon, commercial property, residential property, development opportunity, land for sale, acreage for sale, city of salem",
  openGraph: {
    title: "Herron Crossing",
    description: "390 acres of urban tranquility with urban convenience.",
    siteName: "Herron Crossing",
    type: "website",
    locale: "en_US",
    url: "https://herroncrossing.com",
    images: [
      {
        url: "https://herroncrossing.com/images/og-image.png",
        alt: "Herron Crossing",
      },
    ],
  },
  images: [
    {
      url: "https://herroncrossing.com/images/og-image.png",
      alt: "Herron Crossing",
    },
  ],
};

export default function PhotosPage() {
  return (
    <main>
      <HeroPhoto
        image={hero}
        altText={`Turner Rd landscape`}
        heading={`Imagine the possibilities`}
        subheading={`The future of this property is a virtually blank slate that holds boundless development potential.`}
        buttonVariant={`double`}
        linkText={`View photo gallery`}
        linkTo={`#photo-gallery`}
        icon={<MdArrowOutward />}
      />
      <section className="flex flex-col gap-10 px-5 pb-10 h-full w-full 2xl:w-4/6 mx-auto">
        <div id="photo-gallery" className="flex flex-col gap-10 py-10">
          <h3 className="text-h2 font-medium pb-5 border-b-2 border-black">
            Photos
          </h3>
          <div className="col-span-full">
            <Carousel photos={propertyPhotos} />
          </div>
        </div>
        <div id="concepts" className="flex flex-col gap-10  py-10">
          <h3 className="text-h2 font-medium pb-5 border-b-2 border-black">
            Concepts
          </h3>
          <div className="col-span-full">
            <Carousel photos={conceptMaps} />
          </div>
        </div>
      </section>
    </main>
  );
}
