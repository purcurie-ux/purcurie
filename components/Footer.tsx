function Footer() {
  return (
    <section className="footer">
      <div className="footer-left">
        <div className="footer-inner">
          <div className="footer-img-wrap">
            <div
              data-w-id="56b1c28c-7224-591c-c46f-bf3d0dbf8ab9"
              className="footer-img"
            >
              <div className="section-img">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f8eb75b099c24d5d880bf_footer.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f8eb75b099c24d5d880bf_footer-p-500.webp 500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f8eb75b099c24d5d880bf_footer.webp       634w
                    "
                  alt="Footer Image"
                  className="section-image"
                />
              </div>
            </div>
            <a href="#" target="_blank" className="location w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f8f8cfcbbe1d714f2ab1c_ic-location.svg"
                loading="lazy"
                alt="Location Icon"
              />
              <div>View Our Store</div>
            </a>
          </div>
          <div className="ft-menu-wrap">
            <div>
              <div className="ft-sub-title">Pages</div>
              <div className="ft-menu">
                <a href="/about" className="ft-link">
                  About us
                </a>
                <a href="/categories" className="ft-link">
                  Categories
                </a>
                <a href="/product" className="ft-link">
                  Shop
                </a>
                {/* <a href="/blogs" className="ft-link">
                  Blogs
                </a> */}
                <a href="/contact" className="ft-link">
                  Contact us
                </a>
              </div>
            </div>
            <div>
              <div className="ft-sub-title">Utility</div>
              <div className="ft-menu">
                <a href="/disclaimer" className="ft-link">
                  Disclaimer
                </a>
                <a href="/privacy" className="ft-link">
                  Privacy Policy
                </a>
                <a href="/refund" className="ft-link">
                  Return Policy
                </a>
                <a href="/terms" className="ft-link">
                  Terms &amp; Conditions
                </a>
                <a href="/shipping" className="ft-link">
                  Shipping Policy
                </a>
              </div>
            </div>
            <div>
              <div className="ft-sub-title">Contact</div>
              <div className="ft-menu">
                <a href="tel:+(91) 97697 77006" className="ft-link">
                  +(91) 97697 77006
                </a>
                <a href="mailto:contact@purcurie.com" className="ft-link">
                  contact@purcurie.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
           
            {/* <a
              href="https://webflow.com"
              target="_blank"
              className="utility-link"
            >
              Webflow
            </a> */}
            
          </div>
          <div className="social-icon-wrap">
            <a
              data-w-id="56b1c28c-7224-591c-c46f-bf3d0dbf8aec"
              href="https://x.com/PurCurie"
              target="_blank"
              className="social-icon w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7b344fca3399f4e2c_ic-twitter.svg"
                loading="lazy"
                alt="Twitter"
              />
            </a>
            {/* <a
              data-w-id="56b1c28c-7224-591c-c46f-bf3d0dbf8aee"
              href="https://facebook.com"
              target="_blank"
              className="social-icon w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7eb91eccdec92ee14_ic-facebook.svg"
                loading="lazy"
                alt="Facebook"
              />
            </a> */}
            {/* <a
              data-w-id="56b1c28c-7224-591c-c46f-bf3d0dbf8af0"
              href="https://youtube.com"
              target="_blank"
              className="social-icon w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba729fd30aa64ae5055_ic-youtube.svg"
                loading="lazy"
                alt="Youtube"
              />
            </a> */}
            <a
              data-w-id="56b1c28c-7224-591c-c46f-bf3d0dbf8af2"
              href="https://www.instagram.com/purcurie/"
              target="_blank"
              className="social-icon w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7f89048e8516b771f_ic-insta.svg"
                loading="lazy"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-wrap">
          <div>
            <div className="ft-sub-title-02">Exclusive offers &amp;tips</div>
            <p className="single-text">
              Be the first to know about exclusive deals, beauty tips, and new
              arrivals.
            </p>
          </div>
          <div className="ft-form-block w-form">
            <form
              id="wf-form-Contact-Form"
              name="wf-form-Contact-Form"
              data-name="Contact Form"
              method="get"
              className="footer-form"
              data-wf-page-id="686f439ee34b78f814ae2df2"
              data-wf-element-id="56b1c28c-7224-591c-c46f-bf3d0dbf8afc"
              data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
            >
              <input
                className="ft-input w-input"
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder="Email"
                type="email"
                id="email"
                required
              />
              <input
                type="submit"
                data-wait=""
                className="ft-submit-button w-button"
                value=""
              />
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div>© 2026 PurCurie</div>
      </div>
    </section>
  );
}

export default Footer;
