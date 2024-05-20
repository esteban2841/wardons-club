import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { NavBar } from '@/components/molecules/NavBar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Wardons Villavicencio",
  description: "Club de baloncesto, entrenamiento para niños y niñas de todas las edades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} box-border`}>
      <body className="bg-[#141617] text-foreground">
        <main className="flex flex-col items-center">
          <>
            <NavBar></NavBar>
            {children}
          </>
        </main>
      </body>
    </html>
  );
}
