import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
   title: "BikeShared",
  description: "BikeShared Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}
        <script src="../path/to/flowbite/dist/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
