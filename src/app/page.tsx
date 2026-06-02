import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <Header />
      <Hero />
    </main>
  );
}