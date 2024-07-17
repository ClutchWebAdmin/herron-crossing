import photo1 from "../../../public/images/prison-exterior-1.png";
import photo2 from "../../../public/images/prison-exterior-2.png";
import photo3 from "../../../public/images/prison-exterior-3.png";
import photo4 from "../../../public/images/prison-exterior-4.png";
import photo5 from "../../../public/images/property-landscape-view.png";
import photo6 from "../../../public/images/greenhouse.png";
import photo7 from "../../../public/images/property-road.png";
import Image from "next/image";

export default function PhotosPage() {
  const propertyPhotos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
  ];
  return (
    <main className="mt-[var(--mobileHeaderHeight)] lg:mt-[var(--desktopHeaderHeight)] px-5">
      {propertyPhotos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="w-full h-auto object-cover"
          placeholder="blur"
        />
      ))}
    </main>
  );
}
