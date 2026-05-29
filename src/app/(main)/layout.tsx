import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";

import { PageTransitionProvider } from "@/app/(main)/a-components/transition/PageTransitionProvider";
import styles from "./layout.module.css";

import Nav from "./a-components/nav/Nav";
import Footer from "./a-components/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`${styles.mainLayout} ${playfair.variable}`}>
        <PageTransitionProvider>
          <Nav />
          {children}
          <Footer />
        </PageTransitionProvider>
      </div>
    </>
  );
}
