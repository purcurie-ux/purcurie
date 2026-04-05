import Link from "next/link";
import Image from "next/image";

function CTASection() {
  return (
    <section className="cta">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-wrap">
          <div className="cta-top">
            <div className="sub-title">
              <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                alt="Sub Title Icon"
                width={20}
                height={20}
              />
              <div>Our Commitment to Beauty</div>
            </div>
            <h3
              data-w-id="d7cf1078-b003-33b7-0914-f7e5ab8d81ef"
              style={{ opacity: 0 }}
              className="cta-heading"
            >
              Beauty Made Simple
            </h3>
          </div>
          <div
            data-w-id="925eb365-2e07-2664-f113-e2d91980d806"
            style={{ opacity: 0 }}
            className="cta-bottom"
          >
            <Link
              href="/categories"
              data-w-id="a96c79e4-ee77-71bb-ef4b-4e6d317a275f"
              className="primary-button outline w-inline-block"
            >
              <div className="arrow-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
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
               <div>shop now</div>
            </Link>
            <p className="cta-info">
              Explore our collection of cosmetics 
              and beauty tools designed for everyday confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
