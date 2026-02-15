import type { ReactNode } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}


