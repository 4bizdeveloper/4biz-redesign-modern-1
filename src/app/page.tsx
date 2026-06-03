import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Home_about from '@/components/Home_about';

export default function Home() {
  return (
    /* GTmetrix & Scroll Optimization: 
      Removed "relative" so that inner absolute containers calculate positioning 
      relative to the global document body viewport instead of locking inside a restricted container box.
    */
    <div className="w-full bg-zinc-950 selection:bg-emerald-500 selection:text-white overflow-visible">
      <Hero />
      <Home_about />
    </div>
  );
}