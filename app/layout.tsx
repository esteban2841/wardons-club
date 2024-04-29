import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Leaping test app",
  description: "Project made to manage calls and have calls' details handy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
}
