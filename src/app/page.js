import Hero from "./components/Hero";

export const metadata = {
  title: "Herron Crossing",
  description: "",
  keywords: "",
  openGraph: {
    title: "Herron Crossing",
    description: "",
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
      <Hero variant={`video`} media={`/videos/hero-video.mp4`} />
    </main>
  );
}
