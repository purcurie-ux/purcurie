import Link from "next/link";
import Image from "next/image"
export function MobileMenu() {
  return (
    <div className="open-menu">
      <div className="open-menu-top">
        <div
          data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164fd"
          className="close-button"
        >
          <div>CLOSE</div>
        <Image
          src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f693e08019c9b0408005d_ic-close.svg"
          alt="Close Icon"
          width={16}
          height={16}
        />
        </div>
        <div className="menu-wrap">
          <Link href="/about" className="nav-link">
            About us
          </Link>
          <Link href="/categories" className="nav-link">
            Categories
          </Link>
          <Link href="/product" className="nav-link">
            Shop
          </Link>
           <Link href="/track" className="nav-link">
            Track Order
          </Link>
          {/* <Link href="/blogs" className="nav-link">
            Blogs
          </Link> */}
          <Link href="/contact" className="nav-link">
            Contact us
          </Link>
          
          <Link 
            href="https://shopify.com/98468430146/account" 
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login Account
          </Link>

        </div>
      </div>
      <div className="nav-bottom">
        <div>© 2026 Purcurie.</div>
        <div className="social-icon-wrap">
          <Link
            data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16514"
            href="https://x.com/PurCurie"
            target="_blank"
            className="social-icon w-inline-block"
            rel="noreferrer"
          >
           <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7b344fca3399f4e2c_ic-twitter.svg"
            alt="Twitter"
            width={20}
            height={20}
          />
          </Link>
          {/* <Link
            data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16516"
            href="https://facebook.com"
            target="_blank"
            className="social-icon w-inline-block"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7eb91eccdec92ee14_ic-facebook.svg"
              loading="lazy"
              alt="Facebook"
            />
          </Link> */}
          {/* <Link
            data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16518"
            href="https://youtube.com"
            target="_blank"
            className="social-icon w-inline-block"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba729fd30aa64ae5055_ic-youtube.svg"
              loading="lazy"
              alt="Youtube"
            />
          </Link> */}
          <Link
            data-w-id="d3adb6d7-cc56-c118-6985-cf7153b1651a"
            href="https://www.instagram.com/purcurie/"
            target="_blank"
            className="social-icon w-inline-block"
            rel="noreferrer"
          >
            <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7f89048e8516b771f_ic-insta.svg"
            alt="Instagram"
            width={20}
            height={20}
          />
          </Link>
        </div>
      </div>
    </div>
  );
}