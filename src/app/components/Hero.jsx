import Image from "next/image";

export default function Hero({ variant, media }) {
  if (variant === "video") {
    return (
      <section className="h-svh w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={media} type="video/mp4" />
          Your browser doesn not support the video tag.
        </video>
      </section>
    );
  } else if (variant === "photo") {
    return (
      <section className="h-svh w-full">
        <Image
          src={media}
          alt="Alt text"
          priority
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </section>
    );
  }
}
