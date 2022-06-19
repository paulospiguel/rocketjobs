import Footer from "@components/Footer";
import { Header } from "@components/Header";

interface HorizontalLayoutProps {
  children: any;
}

export default function HorizontalLayout({ children }: HorizontalLayoutProps) {
  return (
    <div className="w-full h-screen background-radial-gradient">
      <div className="overflow-hidden background-radial-gradient">
        <div className="mx-auto">
          <Header />

          <main className="flex-1 pt-20">{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
