import Image from "next/image";
import Button from "./UI/Button";
import { MdArrowDownward } from "react-icons/md";
import photo from "../../../public/images/hero-2.png";

export default function SummarySection() {
  return (
    <section
      id="summary"
      className="relative flex flex-col lg:flex-row gap-10 px-5 py-10 h-full"
    >
      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <div className="flex flex-col h-full justify-between gap-20">
          <h3 className="text-h3 lg:text-h2 font-medium">Executive summary</h3>
          <div className="flex flex-col gap-5 mb-10 text-h6 lg:text-h5">
            <p>
              Prime development opportunity inside the City of Salem limits.
              Situated just 7 miles southeast of downtown Salem, this property
              is the last and largest of its kind within city boundaries. It
              shows off with a unique blend of rural tranquility, impressive
              natural features, and suburban convenience.
            </p>
            <p>
              The property neighbors Turner Lake and Corban University with easy
              access to major amenities including an airport and big-box retail.
              One of the best features of the site is one that can't be seen -
              the residential areas at the southern end of the property are
              within the Cascade School District, a highly sought after district
              within the Willamette Valley.
            </p>
            <p>
              Seize the chance to shape the future of this evolving
              rural-suburban area. Whether you're looking to invest in a premier
              development project or seeking a strategic partnership, this
              property promises unparalleled potential.
            </p>
          </div>
          <Button
            isLight
            variant={`double`}
            linkTo={"#details"}
            text={`View all details`}
            icon={<MdArrowDownward />}
          />
        </div>
      </div>

      <div className="w-full h-full sticky top-0 right-0 lg:w-1/2">
        <Image
          src={photo}
          alt="placeholder"
          className="w-full h-auto object-cover aspect-square"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
