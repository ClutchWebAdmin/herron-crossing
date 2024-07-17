const zoningData = [
  { code: "IG", description: "General Industrial" },
  { code: "IC", description: "Industrial Commercial" },
  { code: "RES", description: "Residential" },
  { code: "MU-III", description: "Mixed-Use" },
];

const taxesData = [
  { code: "Land Assessment", description: "$0" },
  { code: "Improvements Assessment", description: "$0" },
  { code: "Total Assessment", description: "$11,081,720" },
];

export default function DetailsSection() {
  return (
    <section
      id="details"
      className="relative flex flex-col gap-10 px-5 py-10 lg:py-20 h-full w-full"
    >
      <div className="flex flex-col gap-5 py-10">
        <h3 className="w-full text-left text-h2 font-medium lg:text-h1">
          390 acres
        </h3>
        <div className="flex flex-col flex-1">
          <div className="w-full h-12 md:h-14 border-black border-b-2 border-l-2"></div>
          <div className="w-full h-12 md:h-14 border-black border-r-2"></div>
        </div>
        <h3 className="w-full text-right text-h2 lg:text-h1 font-medium">
          $64,103/acre
        </h3>
        <div className="flex flex-col flex-1">
          <div className="w-full h-12 md:h-14 border-black border-b-2 border-r-2"></div>
          <div className="w-full h-12 md:h-14 border-black border-l-2"></div>
        </div>
        <h3 className="w-full text-left text-h2 lg:text-h1 font-medium">
          $25,000,000
        </h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10">
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

      <div className="flex flex-col gap-10 py-10">
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
