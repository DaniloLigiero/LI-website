import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import NavBar from "@/components/NavBar";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ligiero Industries",
  description: "The fine Design for collectors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
      <NavBar/>
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
              raysOrigin="top-center-offset"
              raysColor="#a33101"
              raysSpeed={0.7}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.05}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1.1}
              saturation={1}
          />
      </div>

      <main>
          {children}
      </main>

      </body>
    </html>
  );
}
