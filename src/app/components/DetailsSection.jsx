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
      <div className="flex flex-col gap-y-5 w-full xl:w-5/6 2xl:w-4/6 lg:mx-auto py-10">
        <div className="grid md:grid-cols-3 gap-y-5">
          <div className="flex flex-col col-span-1 gap-5">
            <h3 className="text-h2 md:text-h3 lg:text-h2 col-span-1 font-medium">
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
            <h3 className="text-h2 md:text-h3 lg:text-h2 font-medium">
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
            <h3 className="text-h2 md:text-h3 lg:text-h2 mr-auto md:mr-0 md:ml-auto col-span-1 font-medium">
              {totalPrice}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10 w-full 2xl:w-4/6 mx-auto">
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

      <div className="flex flex-col gap-10 py-10 w-full 2xl:w-4/6 mx-auto">
        <div className="flex flex-col gap-5 md:flex-row justify-between md:items-end border-b-2 border-black pb-5">
          <h4 className="w-fit text-h3 md:text-h2 font-medium">
            Property Taxes
          </h4>
          <p className="hidden md:flex w-fit text-p font-medium text-primaryLight">
            Parcel No. 327913
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
