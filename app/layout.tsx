import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Leaping test app",
  description: "Project made as tech test for leaping ai to receive audios from a server, store them in supabase and consume it in frontend using next, in a protected user layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} box-border`}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
}
