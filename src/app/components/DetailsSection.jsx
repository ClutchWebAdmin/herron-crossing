export default function DetailsSection() {
  return (
    <section
      id="details"
      className="relative flex flex-col gap-10 px-5 py-10 h-full w-full"
    >
      <div className="flex flex-col gap-5 text-h3 md:text-h2 font-medium">
        <h3 className="w-full text-left">390 acres</h3>
        <div className="flex flex-col flex-1">
          <div className="w-full h-12 md:h-14 border-black border-b-2 border-l-2"></div>
          <div className="w-full h-12 md:h-14 border-black border-r-2"></div>
        </div>
        <h3 className="w-full text-right">$25,000,000</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-12"></div>
    </section>
  );
}
