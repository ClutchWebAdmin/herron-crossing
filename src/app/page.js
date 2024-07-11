export default function HomePage() {
  return (
    <main className="px-5 flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        <h1 className="text-h1">Heading 1</h1>
        <h2 className="text-h2">Heading 2</h2>
        <h3 className="text-h3">Heading 3</h3>
        <h4 className="text-h4">Heading 4</h4>
        <h5 className="text-h5">Heading 5</h5>
        <h6 className="text-h6">Heading 6</h6>
        <p className="text-p">Body Text</p>
        <p className="text-tiny">Tiny Text</p>
      </div>

      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <div className="flex flex-col gap-5 w-full">
          <h4 className="text-h4 font-sans">Sans: Satoshi</h4>
          <h4 className="text-h4 font-serif">Serif: Recia</h4>
          <h4 className="text-h4 font-mono">Mono: Roboto Mono</h4>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="aspect-square bg-primaryDark"></div>
          <div className="aspect-square bg-primaryMid"></div>
          <div className="aspect-square bg-primaryLight"></div>
          <div className="aspect-square bg-primaryLightest"></div>
          <div className="aspect-square bg-secondaryDark"></div>
          <div className="aspect-square bg-secondaryMid"></div>
          <div className="aspect-square bg-secondaryLight"></div>
          <div className="aspect-square bg-secondaryLightest"></div>
          <div className="aspect-square bg-white border border-gray-600"></div>
          <div className="aspect-square bg-black"></div>
        </div>
      </div>
    </main>
  );
}
