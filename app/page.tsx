import Hero from "@/components/Hero";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { MarqueeDemo } from "@/components/marquee";
import Navbar from "@/components/Navbar";
import { DockDemo } from "@/components/DockDemo";
import { OrbitingCirclesDemo } from "@/components/OrbitCircle";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <AnimatedGradientTextDemo />
      <Hero />
      <Projects />


      {/**
       *
      <DockDemo />
       *
      <About />
       *
      <FAQ />
       *
      <Contact />
       */}

    </>
  );
}
