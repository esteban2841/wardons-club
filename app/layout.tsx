import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PlacesProvider, MapProvider } from "@/context";
import dynamic from 'next/dynamic';
import 'mapbox-gl/dist/mapbox-gl.css';
import WhatsappContactButton from '@/components/atoms/WhatsappContactButton';
import { Footer } from "@/components/molecules/Footer";
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Suspense } from "react";
import Image from "next/image";

const NavBar = dynamic(() => import('@/components/molecules/NavBar'), {
  ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Wardons Club de baloncesto de Villavicencio",
  description: "Club de baloncesto ubicado en villavicencio, entrenamiento para niños y niñas de todas las edades, clases de baloncesto personalizadas, clases para niños, baloncesto de iniciacion, formacion deportiva, basketball club, somos profesionales en el entrenamiento de baloncesto de todas las edades",
  applicationName: 'Wardons club',
  referrer: 'origin-when-cross-origin',
  keywords: ['Basketball Villavicencio', 'acondicionamiento deportivo' ,'baloncesto','formacion para niños', 'Wardons baloncesto', 'Baloncesto niños', 'campeones 2024 baloncesto iniciacion', 'deporte villavicencio', 'baloncesto', 'basketball'],
  authors: [{ name: 'Esteban Puentes' }],
  creator: 'Esteban Puentes',
  publisher: 'Esteban Puentes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
    },
  },
  images: [
    {
      url: 'https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/gallery/GALLERY_BANNER.avif', // Must be an absolute URL
      width: 1800,
      height: 1600,
      alt: 'Familia wardons',
      objectFit: 'cover'
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} box-border`}>
      <GoogleAnalytics gaId="G-1L1M5FQ7ZZ" />
      <body className="bg-[#000] text-foreground">
        <main className="flex flex-col items-center relative">
          
          <Suspense fallback={
            <nav className="flex flex-row items-center justify-between w-full h-[70px] b-[black] relative z-20">
            <a href='/' >
              <Image className='wardons-logo' src='/assets/images/wardons-logo-mobile.png' alt="logo-mobile" width={60} height={60}/>
            </a>
          </nav>
          }>
            
            <NavBar baseUrl={defaultUrl}></NavBar>
          </Suspense>
          <PlacesProvider>
            <MapProvider>
              {children}
            </MapProvider>
          </PlacesProvider>
          <WhatsappContactButton></WhatsappContactButton>
          <Footer></Footer>
          
        </main>
      </body>
    </html>
  );
}
