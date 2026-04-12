import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-clip">
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Gallery />
      <Footer />
    </main>
  );
}