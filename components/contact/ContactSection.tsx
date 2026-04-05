// export default ContactSection;
"use client"; // <--- THIS IS THE FIX. It must be the very first line.

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import Image from "next/image";

function ContactSection() {
  // 1. Create references and state
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(""); // Values: "", "success", "error"
  const [ticketID, setTicketID] = useState("");

  // 1. GENERATE TICKET ID ON CLIENT SIDE
  // We use useEffect to ensure this only runs on the browser to avoid server mismatch errors
// 1. GENERATE SMART DATE-BASED ID
  // This looks like "260117-0930" (Year 26, Jan 17, 9:30 AM)
  // It effectively "remembers" the order because time always goes up.
  useEffect(() => {
    const now = new Date();
    
    const year = now.getFullYear().toString().slice(-2); // "26"
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // "01"
    const day = now.getDate().toString().padStart(2, '0'); // "17"
    
    // Use Time (Hours + Minutes + Seconds) to make it unique and increasing
    const time = now.getHours().toString().padStart(2, '0') + 
                 now.getMinutes().toString().padStart(2, '0') 
                 
    // Result Example: "260117-194512"
    const smartID = `${year}${month}${day}-${time}`;
    
    setTicketID(smartID);
  }, []);
  
  // 2. Define the send function
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // --- PASTE YOUR KEYS HERE ---
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;   // Already updated from your screenshot
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // Paste the ID starting with "template_"
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;   // Paste the key from Account > API Keys
    // ----------------------------

    if (form.current && SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log("Email sent!", result.text);
            setStatus("success");
            // Optional: Reset form fields after success
            if (form.current) form.current.reset();
        }, (error) => {
            console.log("Failed...", error.text);
            setStatus("error");
        });
    } else {
        console.error("Environment variables are missing. Please check your .env file.");
        setStatus("error");
    }
  };

  return (
    <div className="page-wrap">

      <section className="contact">
        {/* ✅ ANIMATION STYLE UPDATED: NOW SLIDES DOWN 18 jan */} 
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            /* Starts -40px (Higher up) */
            transform: translateY(-40px); 
          }
          to {
            opacity: 1;
            /* Lands at 0 (Normal position) */
            transform: translateY(0); 
          }
        }

        .animate-on-load {
          /* Runs the 'fadeInDown' animation for 1.2 seconds */
          animation: fadeInDown 1.2s ease-out forwards;
        }
      `}</style>
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
                
                {/* 3. Attach ref and onSubmit handler */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="form"
                  data-wf-page-id="686fb11140391bdc28566e67"
                  data-wf-element-id="edb0bf44-9458-6c62-35bb-1dd81ef8b0b8"
                  data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                >
                  {/* 3. HIDDEN INPUT FOR TICKET ID */}
                  {/* This sends the random ID to EmailJS without the user seeing it */}
                  <input type="hidden" name="Ticket-ID" value={ticketID} />

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
                  
                  {/* Submit Button changes text based on status */}
                  <input
                    type="submit"
                    data-wait=""
                    className="submit-button w-button"
                    value={status === "success" ? "Sent!" : "Submit Now"}
                    disabled={status === "success"}
                  />
                </form>

                {/* 4. Success Message: Shown only when status is 'success' */}
                <div 
                  className="success-message w-form-done"
                  style={{ display: status === "success" ? "block" : "none" }}
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>

                {/* 5. Error Message: Shown only when status is 'error' */}
                <div 
                  className="error-message w-form-fail"
                  style={{ display: status === "error" ? "block" : "none" }}
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>

              </div>
            </div>


                  {/* RIGHT SIDE WITH ANIMATION 18. jan*/}
            <div className="contact-right">
              <div className="contact-img">
                
                {/* ✅ 2. APPLIED ANIMATION CLASS HERE */}
                {/* Removed the inline 'style' that hid the image */}
                <div className="section-img animate-on-load">
                  <Image
  src="https://res.cloudinary.com/dljsgxrge/image/upload/q_auto,f_auto/v1775396917/ChatGPT_Image_Feb_17_2026_04_56_51_PM_v4bkkg.jpg"
  alt="Contact Image"
  width={940}
  height={940}
  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
  className="section-image"
/>
                </div>
              </div>
              <div className="contact-bottom">
                <h6 className="contact-heading">Reach Out to PUR CURIE PRIVATE LIMITED</h6>
                <div className="conatct-wrap">
              <div className="contact-info" style={{ marginTop: '15px' }}>
            <div className="contact-text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Registered Office:</div>
            <a 
              href="https://maps.app.goo.gl/ox8dtuFEPg8Acd4f6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="plain-link" 
              style={{ 
                fontSize: '14px', 
                lineHeight: '1.6', 
                display: 'block', 
                textDecoration: 'none', 
                color: 'inherit' 
              }}
            >
              Room No. 001, Janki Apartment, Bhau Complex,<br />
              Achole Road, Nallasopara West, Palghar,<br />
              Maharashtra, 401203
            </a>
          </div>
                  <div className="contact-info">
                    <div className="contact-text">Phone:</div>
                    <a href="tel:+919769777006" className="plain-link">
                      +91 9769777006
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
    <section className="faq">
  <div className="w-layout-blockcontainer container w-container">
    <div className="overflow-hidden">
      <div className="sub-title">
        <Image
          src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
          alt="Sub Title Icon"
          width={20}
          height={20}
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
                <Image
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 1"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>Do you offer phone or WhatsApp support?</div>
                <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
              </a>
              <a
                data-w-tab="Tab 2"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How do I request a return or refund?</div>
              <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
              </a>
              <a
                data-w-tab="Tab 3"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>I have not received my order. Who should I contact?</div>
               <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
              </a>
              <a
                data-w-tab="Tab 4"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>What is your customer support timing?</div>
               <Image
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
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
                  Ph.no: +91 9769777006
                   <br />
                   Whats app: +91 9769777006
                   <br />
                  Our support team will respond as soon as possible during business hours.
                  <br />
                  We are a registered entity: PUR CURIE PRIVATE LIMITED
                </p>
              </div>
              <div data-w-tab="Tab 1" className="w-tab-pane">
                <p className="single-text">
                  Currently, we provide customer support via email and phone no also
                   <br />
                  Email: support@purcurie.com
                   <br />
                  Ph.no : +91 9769777006
                   <br />
                  to ensure all requests are properly tracked and resolved.
                </p>
              </div>
              <div data-w-tab="Tab 2" className="w-tab-pane">
                <p className="single-text">
                  You can request a return or refund by emailing us within 48 hours of delivery. Please refer to our Refund & Return Policy for full details.<br></br>Clarify that once the request is approved, the money is sent back to the original payment method within 5–10 business days
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