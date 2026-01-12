function ContactSection() {
  return (
    <div className="page-wrap">
      <section className="contact">
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-inner">
            <div
              data-w-id="09476a9a-82e6-02e9-a351-4f7337fdfe15"
              
              className="contact-left"
            >
              <h3 className="contact-heading">
                Fill out the form below, and our team will get back to you as
                soon as possible.
              </h3>
              <div className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form"
                  data-wf-page-id="686fb11140391bdc28566e67"
                  data-wf-element-id="edb0bf44-9458-6c62-35bb-1dd81ef8b0b8"
                  data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                >
                  <div className="form-inner">
                    <input
                      className="input w-input"
                      maxLength={256}
                      name="First-Name"
                      data-name="First Name"
                      placeholder="First name*"
                      type="text"
                      id="f-name"
                      required
                    />
                    <input
                      className="input w-input"
                      maxLength={256}
                      name="Last-Name"
                      data-name="Last Name"
                      placeholder="Last name"
                      type="text"
                      id="l-name"
                    />
                    <input
                      className="input email w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="Email address*"
                      type="email"
                      id="email"
                      required
                    />
                    <input
                      className="input phone w-input"
                      maxLength={256}
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone number"
                      type="tel"
                      id="phone"
                    />
                    <textarea
                      required
                      placeholder="Write your message here* "
                      maxLength={5000}
                      id="Message"
                      name="Message"
                      data-name="Message"
                      className="message w-node-_60d8a82c-1568-6fb5-6d11-68e6fab43c54-28566e67 w-input"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    data-wait=""
                    className="submit-button w-button"
                    value="Submit Now"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <div
                data-w-id="7a5bf802-07d1-f4e9-c1e5-fd13fc51572c"
                className="contact-img"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="section-img"
                >
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686fb2b4a4912f99b0784250_contact.webp"
                    loading="lazy"
                    style={{
                      WebkitTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      filter: "blur(10px)",
                    }}
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                    alt="Contact Image"
                    srcSet="
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686fb2b4a4912f99b0784250_contact-p-500.webp   500w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686fb2b4a4912f99b0784250_contact-p-800.webp   800w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686fb2b4a4912f99b0784250_contact-p-1080.webp 1080w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686fb2b4a4912f99b0784250_contact.webp        1236w
                      "
                    className="section-image"
                  />
                </div>
              </div>
              <div className="contact-bottom">
                <h6 className="contact-heading">Reach Out Anytime</h6>
                <div className="conatct-wrap">
                  <div className="contact-info">
                    <div className="contact-text">Email:</div>
                    <a href="mailto:support@purcurie.com" className="plain-link">
                      support@purcurie.com
                    </a>
                  </div>
                  <div className="contact-info">
                    <div className="contact-text">Phone:</div>
                    <a href="tel:+919876543210" className="plain-link">
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="store" className="store">
        <div className="w-layout-blockcontainer container w-container">
          <div className="store-inner">
            <div
              data-w-id="8215b780-0314-7be0-c369-33b853e9f5c6"
              className="store-img"
            >
              <div
                style={{
                  WebkitTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="section-img"
              >
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68709302cb5eb1435d9016bf_store.webp"
                  loading="lazy"
                  style={{
                    WebkitTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    filter: "blur(10px)",
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  alt="Store Image"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68709302cb5eb1435d9016bf_store-p-500.webp   500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68709302cb5eb1435d9016bf_store-p-800.webp   800w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68709302cb5eb1435d9016bf_store-p-1080.webp 1080w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68709302cb5eb1435d9016bf_store.webp        1236w
                    "
                  className="section-image"
                />
              </div>
            </div>
            <div className="store-right">
              <div
                data-w-id="7df5c95a-8a0a-a0a3-485e-8ca02c0127ba"
                
                className="store-wrap"
              >
                <div>
                  <h3 className="store-heading">California, USA</h3>
                  <div>3891 Ranchview Dr. Richardson, California 62639</div>
                </div>
                <a
                  data-w-id="8544c272-eb90-cb6e-24d5-185a2fa08d0b"
                  href="https://www.google.com/maps/place/Heptic/@32.9869838,-96.6166663,954m/data=!3m2!1e3!4b1!4m6!3m5!1s0x864c1c846a181d41:0xe1167132cabc18bd!8m2!3d32.9869793!4d-96.6140914!16s%2Fg%2F11q8yhslj5?entry=ttu&amp;g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="location-link w-inline-block"
                >
                  <div>Get Direction</div>
                  <div className="arrow-wrap">
                    <img
                      style={{
                        WebkitTransform:
                          "translate3d(-20px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(-20px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(-20px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(-20px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        opacity: 0,
                      }}
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      className="arrow"
                    />
                  </div>
                </a>
              </div>
              <div
                data-w-id="fc2b3116-1317-08ee-169f-ab15fab1f1cb"
                
                className="store-wrap"
              >
                <div>
                  <h3 className="store-heading">New Jersey, USA</h3>
                  <div>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
                </div>
                <a
                  data-w-id="fc2b3116-1317-08ee-169f-ab15fab1f1d1"
                  href="https://www.google.com/maps/search/2118+Thornridge+Cir.+Syracuse,+Connecticut+35624/@43.0351893,-76.1805654,13296m/data=!3m2!1e3!4b1?entry=ttu&amp;g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="location-link w-inline-block"
                >
                  <div>Get Direction</div>
                  <div className="arrow-wrap">
                    <img
                      data-w-id="3a04b39d-7e7c-794d-9ffa-8417f7bf1dc3"
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      className="arrow"
                    />
                  </div>
                </a>
              </div>
              <div
                data-w-id="bc864abf-8423-b753-b93c-a90a610a5bf2"
                
                className="store-wrap"
              >
                <div>
                  <h3 className="store-heading">New York, USA</h3>
                  <div>4517 Washington Ave. Manchester, Kentucky 39495</div>
                </div>
                <a
                  data-w-id="bc864abf-8423-b753-b93c-a90a610a5bf8"
                  href="https://www.google.com/maps/place/Iangar/@37.1536413,-83.7644756,906m/data=!3m2!1e3!4b1!4m6!3m5!1s0x884352a00e70879f:0x1ad06ed33b7003c!8m2!3d37.1536371!4d-83.7619007!16s%2Fg%2F11rs2v5qy5?entry=ttu&amp;g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="location-link w-inline-block"
                >
                  <div>Get Direction</div>
                  <div className="arrow-wrap">
                    <img
                      data-w-id="5d9426b0-ffd1-773a-ec7d-bc77df3831b5"
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      className="arrow"
                    />
                  </div>
                </a>
              </div>
              <div
                data-w-id="ff49ad4b-9ba8-c7e5-1132-a7c70472ef3b"
                
                className="store-wrap last"
              >
                <div>
                  <h3 className="store-heading">Kentucky, USA</h3>
                  <div>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                </div>
                <a
                  data-w-id="ff49ad4b-9ba8-c7e5-1132-a7c70472ef41"
                  href="https://www.google.com/maps/search/2972+Westheimer+Rd.+Santa+Ana,+Illinois+85486/@39.7137243,-91.906,895564m/data=!3m2!1e3!4b1?entry=ttu&amp;g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="location-link w-inline-block"
                >
                  <div>Get Direction</div>
                  <div className="arrow-wrap">
                    <img
                      data-w-id="777be69c-5699-8b5d-cd8e-255180ff0aed"
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      className="arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="w-layout-blockcontainer container w-container">
          <div className="overflow-hidden">
            <div className="sub-title">
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                loading="lazy"
                alt="Sub Title Icon"
              />
              <div>Frequently Asked Questions</div>
            </div>
          </div>
          <div
            data-current="Tab 5"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="faq-inner w-tabs"
          >
            <div className="faq-left w-tab-menu">
              <a
                data-w-tab="Tab 5"
                className="faq-wrap top w-inline-block w-tab-link w--current"
              >
                <div>How can I contact PurCurie?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 1"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>Do you offer phone or WhatsApp support?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 2"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How do I request a return or refund?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 3"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>I have not received my order. Who should I contact?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 4"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>What is your customer support timing?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
            </div>
            <div className="faq-right w-tab-content">
              <div data-w-tab="Tab 5" className="w-tab-pane w--tab-active">
                <p className="single-text">
                  You can reach us by 
                   <br />
                  Email: support@purcurie.com
                   <br />
                  Ph.no: +91 9876543210
                   <br />
                   Whats app: +91 9876543210
                   <br />
                  Our support team will respond as soon as possible during business hours.
                </p>
              </div>
              <div data-w-tab="Tab 1" className="w-tab-pane">
                <p className="single-text">
                  Currently, we provide customer support via email and phone no also
                   <br />
                  Email: support@purcurie.com
                   <br />
                  Ph.no : +91 9876543210
                   <br />
                  to ensure all requests are properly tracked and resolved.
                </p>
              </div>
              <div data-w-tab="Tab 2" className="w-tab-pane">
                <p className="single-text">
                  You can request a return or refund by emailing us within 48 hours of delivery. Please refer to our Refund & Return Policy for full details.
                </p>
              </div>
              <div data-w-tab="Tab 3" className="w-tab-pane">
                <p className="single-text">
                  If your order is delayed or not delivered, please contact us with your order number and we will assist you with tracking or resolution.
                </p>
              </div>
              <div data-w-tab="Tab 4" className="w-tab-pane">
                <p className="single-text">
                  We usually reply within 24–48 business hours, excluding weekends and public holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
