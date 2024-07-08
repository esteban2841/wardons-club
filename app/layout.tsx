import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PlacesProvider, MapProvider } from "@/context";
import dynamic from 'next/dynamic';
import 'mapbox-gl/dist/mapbox-gl.css';
import WhatsappContactButton from '@/components/atoms/WhatsappContactButton';

const NavBar = dynamic(() => import('@/components/molecules/NavBar'), {
  ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Wardons Villavicencio",
  description: "Club de baloncesto ubicado en villavicencio, entrenamiento para niños y niñas de todas las edades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} box-border`}>
      <body className="bg-[#141617] text-foreground">
        <main className="flex flex-col items-center relative">
          <>
            <NavBar baseUrl={defaultUrl}></NavBar>
            <PlacesProvider>
              <MapProvider>
                {children}
              </MapProvider>
            </PlacesProvider>
            <WhatsappContactButton></WhatsappContactButton>
          </>
        </main>
      </body>
    </html>
  );
}
