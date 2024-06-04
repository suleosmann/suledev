import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeaturedProjects from "./components/FeaturedProjects";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
      </main>
    </div>
  );
}