import HeroPhoto from "../components/HeroPhoto";
import hero from "../../../public/images/detail-page-hero.png";
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";
import SummarySection from "../components/SummarySection";
import DetailsSection from "../components/DetailsSection";
import summaryImage from "../../../public/images/hanging-chain.png";

const summaryParagraphs = [
  "Herron Crossing is a prime development opportunity inside the City of Salem limits. Situated just 7 miles southeast of downtown Salem, 1.1 miles from Interstate 5, and 1.9 miles from Highway 22, this property is the last and largest of its kind within city boundaries. It shows off with a unique blend of rural tranquility, impressive natural features, and suburban convenience.",
  "The property neighbors Turner Lake and Corban University with easy access to major amenities including an airport and big-box retail. One of the best features of the site is one that can't be seen - the residential areas at the southern end of the property are within the Cascade School District, a highly sought after district within the Willamette Valley.",
  "Some highlights include already in-place income of over $18k/mo, joint venture partnership opportunities, flexible options, zoning change complete, nature trails and recreation possibilities with a proposed 80-acre park with over a mile of Mill Creek Access.",
  "Seize the chance to shape the future of this evolving rural-suburban area. Whether you're looking to invest in a premier development project or seeking a strategic partnership, this property promises unparalleled potential.",
];

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

export const metadata = {
  title: "Property Details | Herron Crossing",
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

export default function DetailsPage() {
  return (
    <main className="flex flex-col w-full gap-10 pb-20">
      <HeroPhoto
        image={hero}
        altText={`Turner Rd landscape`}
        heading={`Unparalleled potential`}
        subheading={`Discover a rare development opportunity with this 390-acre property within city boundaries.`}
        buttonVariant={`double`}
        linkText={`Read more`}
        linkTo={`#summary`}
        icon={<MdArrowOutward />}
      />
      <SummarySection
        heading={`Summary`}
        paragraphs={summaryParagraphs}
        buttonVariant={`double`}
        linkTo={`#details`}
        buttonText={`View all details`}
        buttonIcon={<MdArrowDownward />}
        image={summaryImage}
        altText={`Chain hanging on a steel beam`}
      />
      <DetailsSection
        acreage={390}
        pricePerAcre={`$64,103`}
        totalPrice={`$25,000,000`}
        zoningData={zoningData}
        taxesData={taxesData}
      />
    </main>
  );
}
