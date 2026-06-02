import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Home_about from '@/components/Home_about';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <Hero />
      <Home_about />
    </main>
  );
}