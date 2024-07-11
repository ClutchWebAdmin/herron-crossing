import localFont from "next/font/local";
import { Inter, Lora, Roboto_Mono } from "next/font/google";

export const sans = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const serif = localFont({
  src: "./fonts/Recia-Variable.woff2",
  display: "swap",
  variable: "--font-serif",
});

export const mono = localFont({
  src: "./fonts/RobotoMono-Variable.ttf",
  display: "swap",
  variable: "--font-mono",
});

// export const sans = Inter({
//   weight: "variable",
//   display: "swap",
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

// export const serif = Lora({
//   weight: "variable",
//   display: "swap",
//   variable: "--font-serif",
//   subsets: ["latin"],
// });

// export const mono = Roboto_Mono({
//   weight: "variable",
//   display: "swap",
//   variable: "--font-mono",
//   subsets: ["latin"],
// });
