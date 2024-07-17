"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

export default function Carousel({ photos }) {
  return (
    <Splide
      options={{
        type: "loop",
        arrows: true,
        autoplay: true,
      }}
    >
      {photos.map((photo, index) => (
        <SplideSlide key={index}>
          <Image
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
