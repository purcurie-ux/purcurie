import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="w-layout-blockcontainer container w-container">
      <div className="hero-inner">
        <div className="hero-wrapper">
          <h2
            data-w-id="5ff34242-aa17-3537-d0fc-06ef05babff8"
            style={{ opacity: 1 }}
            className="hero-heading"
          >
            Modern Beauty<br></br>
            for Everyday
          </h2>
          <div className="hero-wrap">
            <p
              data-w-id="abb2ee16-b464-c2bb-822b-7ad222671516"
              style={{ opacity: 0 }}
              className="hero-info"
            >
              Discover high-quality cosmetics and beauty tools designed for effortless everyday beauty.
            </p>
            <div className="hero-small-img">
        <Image
  src="https://res.cloudinary.com/dljsgxrge/image/upload/w_400,q_auto,f_auto/v1775338214/linh-ha-nt6KRD9im7A-unsplash_6_qcellt.jpg"
  alt="Hero Image"
  width={400}
  height={400}
  data-w-id="984ea446-ebc6-549c-4bff-abf152479da4"
  style={{ opacity: 0 }}
  className="hero-small-image"
/>
            </div>
          </div>
        </div>
        <div className="hero-wrapper">
          <div className="hero-wrap">
            <Link
              href="/categories"
              data-w-id="0def259f-6aae-fc59-5c88-249c9263c6fd"
              style={{ opacity: 0, position: "relative", zIndex: 10}}
              className="primary-button w-inline-block"
            >
              <div className="arrow-wrap">
                <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
                <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow hover"
              />
              </div>
              <div>View Collection</div>
            </Link>
            <div
              data-w-id="34bffb0f-4624-5bf3-3143-01016de7623f"
              style={{ opacity: 0 }}
              className="client-data"
            >
              <div className="client-wrapper">
                <div className="clients-wrap">
               <Image
                src="https://res.cloudinary.com/dljsgxrge/image/upload/w_200,q_auto,f_auto/v1775338486/6875ffe721a33131471e237b_223d0928e1e689ae75b31c9c5a296de4_client-03_dddwpk.webp"
                alt="Clients Image"
                width={200}
                height={200}
              />
                </div>
                <div className="clients-wrap">
                <Image
                src="https://res.cloudinary.com/dljsgxrge/image/upload/w_200,q_auto,f_auto/v1775338486/6875ffe7e192260df02b8f4c_client-02_hpsgkn.webp"
                alt="Clients Image"
                width={200}
                height={200}
              />
                </div>
                <div className="clients-wrap">
                 <Image
                  src="https://res.cloudinary.com/dljsgxrge/image/upload/w_200,q_auto,f_auto/v1775338486/6875ffe7bb70047a94f8afb4_09b83f083c49e91fcf95acf66f4c0c58_client-01_sftxgd.webp"
                  alt="Clients Image"
                  width={200}
                  height={200}
                />
                </div>
              </div>
              <div>Growing community of modern cosmetics lovers</div>
            </div>
          </div>
         <div
            data-w-id="ed5272db-fb2c-7901-e8a8-851f1fa539d0"
            className="hero-img"
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                transform: "translate3d(0, -110%, 0)",
              }}
              className="section-img"
            >
              <Image
                src="https://res.cloudinary.com/dljsgxrge/image/upload/w_840,q_auto,f_auto/v1775338795/face_qhkicj.webp"
                alt="Hero Image"
                priority
                width={840}
                height={840}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 840px"
                style={{
                  transform: "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1)",
                  filter: "blur(10px)",
                }}
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}