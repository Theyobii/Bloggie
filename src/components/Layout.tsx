import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-highlight/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 -left-60 h-[400px] w-[400px] rounded-full bg-brand-highlight-400/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-highlight-300/[0.03] blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-1 pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
