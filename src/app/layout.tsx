import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: {
    default: "Ryan Santiago | System Design & Optimization",
    template: "%s | Ryan Santiago",
  },
  description:
    "Systems-focused professional specializing in ISO-based management systems, web systems, and data analytics. Designing efficient, compliant, and scalable solutions.",
  keywords: [
    "Systems Design",
    "Systems Optimization",
    "ISO 21001",
    "ISO 9001",
    "Quality Management System",
    "Educational Organization Management System",
    "Web Systems",
    "Web Development",
    "Data Analytics",
    "Process Improvement",
    "Philippines",
  ],
  authors: [{ name: "Ryan Santiago" }],
  creator: "Ryan Santiago",
  //* add when a url is made metadataBase: new URL("WEBSITEURL.COM"),

  openGraph: {
    title: "Ryan Santiago | System Design & Optimization",
    description:
      "Systems-focused professional specializing in ISO-based management systems, web systems, and data analytics. Designing efficient, compliant, and scalable solutions.",
    //url:"WEBSITEURL",
    siteName: "Ryan Santiago | System Design & Optimization",
    images: [
      {
        //edit url once website is complete
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Ryan Santiago | System Design & Optimization",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script />
        {/* Atmospheric background spotlights */}
        <div className="spotlight-gold" aria-hidden="true" />
        <div className="spotlight-silver" aria-hidden="true" />
 
        {children}
      </body>
    </html>
  );
}
