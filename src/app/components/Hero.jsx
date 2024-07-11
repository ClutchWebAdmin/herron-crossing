import Image from "next/image";

export default function Hero({ variant, media }) {
  if (variant === "video") {
    return (
      <section className="h-svh w-full">
        <video
          src={media}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </section>
    );
  } else if (variant === "photo") {
    return (
      <section className="h-svh w-full">
        <Image
          src={media}
          alt="Alt text"
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </section>
    );
  }
}
