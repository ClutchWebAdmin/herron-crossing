import Image from "next/image";
import zoningMap from "../../../public/images/zoning-map.png";

export default function DetailsSection({
  acreage,
  pricePerAcre,
  totalPrice,
  zoningData,
  taxesData,
}) {
  return (
    <section
      id="details"
      className="relative flex flex-col gap-20 px-5 h-full w-full"
    >
      <div
        id="pricing"
        className="flex flex-col gap-y-5 w-full 2xl:w-4/6 lg:mx-auto py-10"
      >
        <div className="grid md:grid-cols-3 gap-y-5">
          <div className="flex flex-col col-span-1 gap-5">
            <h3
              className="text-h2 md:text-h3 lg:text-h2 col-span-1 font-medium"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {acreage} acres
            </h3>
            <div className="flex flex-col">
              <div className="border-l-2 border-b-2 border-black h-8 lg:h-32"></div>
              <div
                className="border-r-2 
          border-black h-24 lg:h-14"
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 justify-items-end md:justify-items-center gap-y-5">
          <div className="flex flex-col col-span-full md:col-span-1 md:col-start-2 gap-5">
            <h3
              className="text-h2 md:text-h3 lg:text-h2 font-medium"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {pricePerAcre}/acre
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-y-5">
          <div className="flex flex-col col-span-full md:col-span-1 md:col-start-3 gap-5">
            <div className="flex flex-col">
              <div className="border-r-2 md:border-l-2 md:border-r-0 border-b-2 border-black h-8 lg:h-14"></div>
              <div
                className="border-l-2 md:border-l-0 md:border-r-2 
          border-black h-24 lg:h-32"
              ></div>
            </div>
            <h3
              className="text-h2 md:text-h3 lg:text-h2 mr-auto md:mr-0 md:ml-auto col-span-1 font-medium"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {totalPrice}
            </h3>
          </div>
        </div>
      </div>

      <div
        id="location"
        className="flex flex-col lg:flex-row gap-10 w-full h-fit 2xl:w-4/6 mx-auto py-10"
      >
        <div
          className="w-full lg:w-1/3 order-2 lg:order-1"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.323484097441!2d-122.974508!3d44.876065499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bff87018425c3b%3A0x1315524b8ae2583d!2s5465%20Turner%20Rd%20SE%2C%20Salem%2C%20OR%2097317!5e0!3m2!1sen!2sus!4v1721243171560!5m2!1sen!2sus"
            className="w-full h-auto aspect-square"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="w-full lg:w-2/3 h-fit grid grid-cols-1 md:grid-cols-3 gap-10 order-1 lg:order-2"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h4 className="col-span-full h-fit text-h3 md:text-h2 font-medium border-b-2 border-black pb-5">
            Location
          </h4>
          <div className="col-span-full flex flex-col gap-2">
            <p className="text-tiny md:text-p text-primaryMid">Address</p>
            <h5 className="text-h5 lg:text-h4 font-medium">
              5465 Turner Road SE
            </h5>
          </div>
          <div className="col-span-full md:col-span-1  flex flex-col gap-2">
            <p className="text-tiny md:text-p text-primaryMid">City</p>
            <h5 className="text-h5 lg:text-h4 font-medium">Salem</h5>
          </div>
          <div className="col-span-full md:col-span-1  flex flex-col gap-2">
            <p className="text-tiny md:text-p text-primaryMid">State</p>
            <h5 className="text-h5 lg:text-h4 font-medium">Oregon</h5>
          </div>
          <div className="col-span-full md:col-span-1 flex flex-col gap-2">
            <p className="text-tiny md:text-p text-primaryMid">Zip Code</p>
            <h5 className="text-h5 lg:text-h4 font-medium">97317</h5>
          </div>
        </div>
      </div>

      <div
        id="zoning"
        className="flex flex-col lg:flex-row gap-10 w-full 2xl:w-4/6 mx-auto py-10"
      >
        <div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Image
            src={zoningMap}
            alt="Zoning map"
            className="w-full h-auto aspect-square object-cover"
          />
        </div>
        <div
          className="w-full lg:w-1/2 h-fit grid grid-cols-2 gap-10"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h4 className="col-span-full text-h3 md:text-h2 font-medium border-b-2 border-black pb-5">
            Zoning
          </h4>
          {zoningData.map((zone, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-tiny md:text-p text-primaryMid">
                {zone.description}
              </p>
              <h5 className="text-h5 lg:text-h4 font-medium">{zone.code}</h5>
            </div>
          ))}
        </div>
      </div>

      <div
        id="taxes"
        className="flex flex-col gap-10 py-10 w-full 2xl:w-4/6 mx-auto"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="flex flex-col gap-5 md:flex-row justify-between md:items-end border-b-2 border-black pb-5">
          <h4 className="w-fit text-h3 md:text-h2 font-medium">
            Property Taxes
          </h4>
          <p className="hidden md:flex w-fit text-p font-medium text-primaryLight">
            Parcel No. 327913
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-10">
          <div className="flex flex-col md:hidden gap-2">
            <p className="text-tiny md:text-p text-primaryMid">Parcel No.</p>
            <h5 className="text-h5 md:text-h4 font-medium">327913</h5>
          </div>
          {taxesData.map((data, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-tiny md:text-p text-primaryMid">{data.code}</p>
              <h5 className="text-h5 md:text-h4 font-medium">
                {data.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
