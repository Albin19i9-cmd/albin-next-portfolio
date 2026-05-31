import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albin Sam Shiju | QA/QC Engineer",
  description:
    "QA/QC Engineer and Project Engineer for UAE oil and gas EPC projects, ADNOC-regulated piping, NDE coordination, ISO 9001 QMS, and MDR delivery.",
  openGraph: {
    title: "Albin Sam Shiju | QA/QC Engineer",
    description:
      "QA/QC Engineer with UAE EPC experience across ADNOC-regulated piping, NDE coordination, ISO 9001 QMS, and MDR turnover delivery.",
    images: ["/assets/albin.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
