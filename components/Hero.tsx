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
          src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876010eb83a263837544707_glamz-beauty.svg"
          loading="lazy"
          style={{ opacity: 0 }}
          data-w-id="9061418a-ae45-c063-4c32-479d42553da4"
          alt="Glamz beauty"
          className="glamz-svg"
        />
          </section>
          
          <HomePage />
          <Instagram />
          
    </>
  );
}
