import Image from "next/image";
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

const propertyPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

const conceptMaps = [photo8, photo9, photo10, photo11, photo12];

export default function PhotosPage() {
  return (
    <main className="mt-[var(--mobileHeaderHeight)] lg:mt-[var(--desktopHeaderHeight)]">
      <section
        id="photo-gallery"
        className="relative grid md:grid-cols-4 lg:grid-cols-12 gap-10 px-5 py-10 h-full w-full 2xl:w-4/6 mx-auto"
      >
        <h3 className="text-h2 font-medium col-span-full pb-5 border-b-2 border-black">
          Photo Gallery
        </h3>
        {propertyPhotos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
        ))}
      </section>
    </main>
  );
}
