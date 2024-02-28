import Gallery from "@/src/app/components/Gallery";
import Features from "@/src/app/components/Features";
import GetApp from "@/src/app/components/GetApp";
import Guide from "@/src/app/components/Guide";
import Hero from "@/src/app/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />

      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
