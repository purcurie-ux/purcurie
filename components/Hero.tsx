import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";
import { HeroSection } from "./HeroSection";
import HomePage from "./HomePage";
import Instagram from "./Instagram";

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
        <img
          src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/Svg_Purcurie_2.svg?v=1768310952"
          loading="lazy"
          style={{ opacity: 0 }}
          data-w-id="9061418a-ae45-c063-4c32-479d42553da4"
          alt="PurCurie beauty"
          className="glamz-svg"
        />
          </section>
          
          <HomePage />
          <Instagram />
          
    </>
  );
}
