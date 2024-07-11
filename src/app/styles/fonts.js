import localFont from "next/font/local";

export const display = localFont({
  src: "./fonts/BespokeStencil-Variable.woff2",
  display: "swap",
  variable: "--font-display",
});

export const sans = localFont({
  src: "./fonts/BespokeSans-Variable.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const serif = localFont({
  src: "./fonts/BespokeSerif-Variable.woff2",
  display: "swap",
  variable: "--font-serif",
});

export const mono = localFont({
  src: "./fonts/RobotoMono-Variable.ttf",
  display: "swap",
  variable: "--font-mono",
});
