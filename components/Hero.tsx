// import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";
import { HeroSection } from "./HeroSection";
import HomePage from "./HomePage";
// import Instagram from "./Instagram";
import Image from "next/image"

export function Hero() {
  return (
    <>
      <section className="hero">
        <section className="header">
          {/* <Navbar /> */}
          <SearchBar />
          <MobileMenu />
          <div
            data-w-id="d3adb6d7-cc56-c118-6985-cf7153b1651c"
            className="backgroung-overly"
          ></div>
        </section>
        <HeroSection />
    <div className="glamz-wrapper">
  <img
    src="/hero.svg"
    alt="Purcurie beauty"
    className="glamz-svg"
  />
</div>
          </section>
          
          <HomePage />
          {/* <Instagram /> */}
          
    </>
  );
}