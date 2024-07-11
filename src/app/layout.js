import { sans, serif, mono } from "./styles/fonts";
import "./globals.css";
import "animate.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="min-h-svh w-screen max-w-full flex flex-col mx-auto relative antialiased">
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
