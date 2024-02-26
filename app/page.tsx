import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import SwipeGallery from "@/components/SwipeGallery";

import "swiper/swiper-bundle.css";
import { register } from "swiper/element/bundle";

register();

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
