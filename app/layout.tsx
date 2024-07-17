import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PlacesProvider, MapProvider } from "@/context";
import dynamic from 'next/dynamic';
import 'mapbox-gl/dist/mapbox-gl.css';
import WhatsappContactButton from '@/components/atoms/WhatsappContactButton';
import { Footer } from "@/components/molecules/Footer";
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

const NavBar = dynamic(() => import('@/components/molecules/NavBar'), {
  ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} box-border`}>
      <Head key={'meta'}>
        <title>{"Club de Baloncesto Wardons Villavicencio"}</title>
        <meta name="google-site-verification" content="b8r5HBioWBEaeO4Tx7qBrvWStbPszmGeZ71emKznmG4" />
        <meta name="description" content="Informacion, ubicacion y noticias de nuestro club deportivo de baloncesto wardons, formacion de atletas desde temprana edad mini y juveniles Villavicencio, Meta." />
        <meta property="og:title" content="Escuela, academia, club de Baloncesto Wardons Villavicencio" />
        <meta property="og:description" content="Clases grupales de baloncesto (basketball) para niños y jovenes de todas las edades" />
        <meta property="og:image" content="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/gallery/GALLERY_BANNER.png" /> {/* Reemplaza URL_DE_TU_IMAGEN con la URL de una imagen representativa */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <GoogleAnalytics gaId="G-1L1M5FQ7ZZ" />
      <body className="bg-[#000] text-foreground">
        <main className="flex flex-col items-center relative">
          <>
            <NavBar baseUrl={defaultUrl}></NavBar>
            <PlacesProvider>
              <MapProvider>
                {children}
              </MapProvider>
            </PlacesProvider>
            <WhatsappContactButton></WhatsappContactButton>
            <Footer></Footer>
          </>
        </main>
      </body>
    </html>
  );
}
