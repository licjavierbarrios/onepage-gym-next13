import About from "@/components/about";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <Trainers />
      <About />
    </div>
  );
}
