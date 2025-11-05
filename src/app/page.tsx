import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Leaderboard from "@/components/landing/Leaderboard";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="bg-sky-100 min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Leaderboard />
      <Footer />
    </main>
  );
}
