import HeroVideo from "./components/HeroVideo";

export const metadata = {
  title: "Herron Crossing",
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

export default function HomePage() {
  return (
    <main>
      <HeroVideo media={`/videos/hero-video.mp4`} />
    </main>
  );
}
