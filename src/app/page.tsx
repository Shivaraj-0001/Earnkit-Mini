import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Leaderboard from "@/components/landing/Leaderboard";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (
    <main className="bg-neutral-50">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Leaderboard />
      <Footer />
    </main>
  );
}
