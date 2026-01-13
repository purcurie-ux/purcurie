function Refund() {
  return (
    <>
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="main-heading">
            Refund & Return Policy
          </h1>
        </div>
      </div>

      <div className="page-wrap">
        <div className="w-layout-blockcontainer container w-container">
          <div className="info-outer">

            {/* INTRODUCTION */}
            <div className="info-data">
              <h3>Introduction</h3>
              <p className="single-text">
                This Refund and Return Policy governs the return, replacement and refund of products purchased from PurCurie (“we”, “us”, “our”) through our website, mobile site or related services (collectively referred to as the “Platform”). By placing an order on the Platform, you agree to the terms of this policy.
              </p>
            </div>

            {/* ELIGIBILITY */}
            <div className="info-data">
              <h3>Eligibility for Returns</h3>
              <p className="single-text">
                PurCurie sells skincare, beauty, personal care and cosmetics products which are sensitive in nature and meant for personal use. For reasons of hygiene, safety and quality assurance, we do not accept returns for opened, used or tampered products.
                <br /><br />
                A return, replacement or refund may be initiated only if the product delivered is damaged, defective, expired, incorrect, or missing.
                <br /><br />
                To be eligible for a return, the product must be unused, unopened, in its original packaging, and in the same condition in which it was received.
              </p>
            </div>

            {/* TIME LIMIT */}
            <div className="info-data">
              <h3>Time Limit for Requests</h3>
              <p className="single-text">
                All requests for return, replacement or refund must be raised within 48 hours of delivery. Requests raised after this period will not be accepted.
              </p>
            </div>

            {/* HOW TO RAISE */}
            <div className="info-data">
              <h3>How to Raise a Request</h3>
              <p className="single-text">
                To initiate a return or refund, you must contact PurCurie customer support at support@purcurie.com with your order number, product details and clear images or video showing the issue with the product. Our team will review the request and may ask for additional information before approving the claim.
              </p>
            </div>

            {/* VERIFICATION */}
            <div className="info-data">
              <h3>Verification and Approval</h3>
              <p className="single-text">
                All requests are subject to verification by PurCurie. If the claim is found to be valid, we will arrange for a replacement or refund as applicable. PurCurie reserves the right to reject any request that does not meet the conditions of this policy.
              </p>
            </div>

            {/* REFUND METHOD */}
            <div className="info-data">
              <h3>Refund Method</h3>
              <p className="single-text">
                Once a return or refund request is approved, the refund will be processed to the original payment method used at the time of purchase. Refunds may take 5 to 10 business days to reflect, depending on the payment gateway or bank.
              </p>
            </div>

            {/* NON REFUNDABLE */}
            <div className="info-data">
              <h3>Non-Refundable Cases</h3>
              <ul className="data-list">
                <li>Product is used, opened or damaged after delivery</li>
                <li>Request is raised after 48 hours</li>
                <li>Product is returned without original packaging</li>
                <li>Damage caused due to misuse or negligence</li>
                <li>Minor differences in color, packaging or fragrance due to manufacturing batches</li>
              </ul>
            </div>

            {/* CANCELLATION */}
            <div className="info-data">
              <h3>Cancellations</h3>
              <p className="single-text">
                Orders can be cancelled only before they are shipped. Once an order has been dispatched, it cannot be cancelled.
              </p>
            </div>

            {/* CONTACT */}
            <div className="info-data">
              <h3>Contact & Support</h3>
              <p className="single-text">
                For any queries related to returns or refunds, you may contact:
                <br /><br />
                <strong>PurCurie Customer Support</strong><br />
                Email: support@purcurie.com
              </p>
            </div>

            {/* POLICY CHANGES */}
            <div className="info-data">
              <h3>Policy Changes</h3>
              <p className="single-text">
                PurCurie reserves the right to modify or update this Refund & Return Policy at any time. Any changes will be effective once published on this page.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
