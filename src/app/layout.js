import { sans, serif, mono, display } from "./styles/fonts";
import "./globals.css";
import "animate.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import AOSLoader from "./components/utils/AOSLoader";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${display.variable} scroll-smooth`}
    >
      <body className="min-h-svh w-screen max-w-full flex flex-col mx-auto relative antialiased">
        <TheHeader />
        {children}
        <TheFooter />
        <AOSLoader />
        <Analytics />
      </body>
    </html>
  );
}
