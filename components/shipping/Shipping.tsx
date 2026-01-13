function Shipping() {
  return (
    <>
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="main-heading">
            Shipping Policy
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
                This Shipping Policy governs the shipment and delivery of all products purchased from PurCurie (“we”, “us”, “our”) through our website, mobile site and related services (collectively referred to as the “Platform”). By placing an order on the Platform, you agree to the terms of this Shipping Policy, which forms an integral part of our Terms and Conditions.
              </p>
            </div>

            {/* SERVICEABLE LOCATIONS */}
            <div className="info-data">
              <h3>Serviceable Locations</h3>
              <p className="single-text">
                PurCurie currently ships products only within India. Delivery is subject to courier partner serviceability, government regulations, and logistical constraints. We reserve the right to restrict delivery to certain locations or pin codes without prior notice.
              </p>
            </div>

            {/* ORDER PROCESSING */}
            <div className="info-data">
              <h3>Order Confirmation and Processing</h3>
              <p className="single-text">
                An order is considered confirmed only after successful payment and issuance of an order confirmation. Orders are typically processed within 1 to 2 business days. Processing includes order verification, quality checks, packaging and handover to our logistics partners. Orders placed on weekends or public holidays will be processed on the next working day.
                <br /><br />
                PurCurie reserves the right to cancel any order if payment is not successfully completed, the product is unavailable, there is a pricing or listing error, or if the order is suspected to be fraudulent.
              </p>
            </div>

            {/* PACKAGING */}
            <div className="info-data">
              <h3>Packaging and Handover</h3>
              <p className="single-text">
                All products are packed securely to prevent damage during transit. PurCurie uses tamper-evident packaging to ensure product integrity. Once the order is handed over to the courier partner, responsibility for transportation lies with the logistics provider, although PurCurie will continue to assist customers in tracking and issue resolution.
              </p>
            </div>

            {/* DELIVERY */}
            <div className="info-data">
              <h3>Delivery Timelines</h3>
              <p className="single-text">
                Estimated delivery times vary depending on location, courier serviceability and external conditions. In most cases, deliveries are completed within 3 to 7 business days after dispatch. However, delivery timelines are indicative and not guaranteed. Delays may occur due to weather, natural disasters, strikes, government restrictions, courier disruptions or other events beyond our control. PurCurie shall not be liable for delays caused by such circumstances.
              </p>
            </div>

            {/* TRACKING */}
            <div className="info-data">
              <h3>Order Tracking</h3>
              <p className="single-text">
                Once an order is shipped, customers will receive a tracking link via SMS or email. This can be used to track the shipment in real time. PurCurie relies on third-party courier systems for tracking and does not control the accuracy or frequency of tracking updates.
              </p>
            </div>

            {/* SHIPPING CHARGES */}
            <div className="info-data">
              <h3>Shipping Charges</h3>
              <p className="single-text">
                Shipping charges, if applicable, will be clearly displayed at checkout before the order is placed. Charges may vary based on order value, delivery location, weight and courier partner rates. PurCurie reserves the right to revise shipping charges at any time.
              </p>
            </div>

            {/* DELIVERY ATTEMPTS */}
            <div className="info-data">
              <h3>Delivery Attempts</h3>
              <p className="single-text">
                Courier partners generally make multiple attempts to deliver a package. If delivery fails due to reasons such as incorrect address, unreachable phone number, customer unavailability or refusal to accept the package, the order may be returned to PurCurie. In such cases, re-shipping or refund, if applicable, may be processed after deducting applicable shipping and handling charges.
              </p>
            </div>

            {/* ADDRESS */}
            <div className="info-data">
              <h3>Address Accuracy</h3>
              <p className="single-text">
                Customers are solely responsible for providing complete and accurate shipping details. PurCurie shall not be responsible for delivery failure due to incorrect or incomplete address information provided by the customer.
              </p>
            </div>

            {/* DAMAGE / LOSS */}
            <div className="info-data">
              <h3>Damaged, Lost or Missing Shipments</h3>
              <p className="single-text">
                If a package is delivered in a damaged condition, or if any item is missing, the customer must notify PurCurie within 48 hours of delivery along with clear photographs or video evidence. PurCurie will investigate the matter with the courier partner and provide a replacement or refund in accordance with its Refund & Return Policy. Claims raised after 48 hours may not be accepted.
              </p>
            </div>

            {/* PARTIAL */}
            <div className="info-data">
              <h3>Partial Shipments</h3>
              <p className="single-text">
                In some cases, an order may be shipped in multiple packages depending on product availability or warehouse location. Customers will be informed accordingly and will receive separate tracking details for each shipment.
              </p>
            </div>

            {/* FORCE MAJEURE */}
            <div className="info-data">
              <h3>Force Majeure</h3>
              <p className="single-text">
                PurCurie shall not be liable for failure or delay in delivery due to events beyond its reasonable control, including natural disasters, strikes, lockdowns, governmental actions, courier disruptions, or other force majeure events.
              </p>
            </div>

            {/* CONTACT */}
            <div className="info-data">
              <h3>Customer Support</h3>
              <p className="single-text">
                For any shipping-related queries, customers may contact:
                <br /><br />
                <strong>PurCurie Customer Support</strong><br />
                Email: support@purcurie.com
              </p>
            </div>

            {/* POLICY UPDATES */}
            <div className="info-data">
              <h3>Policy Updates</h3>
              <p className="single-text">
                PurCurie reserves the right to modify or update this Shipping Policy at any time. Any changes will be posted on this page and will become effective immediately upon publication.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;
