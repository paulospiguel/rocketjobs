import { ReactElement } from "react";

import Footer from "@components/Footer";
import { Header } from "@components/Header";

interface HorizontalLayoutProps {
  children: ReactElement;
}

export default function HorizontalLayout({ children }: HorizontalLayoutProps) {
  return (
    <div className="background-radial-gradient w-full h-screen">
      <div className="background-radial-gradient overflow-hidden">
        <div className="mx-auto">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
