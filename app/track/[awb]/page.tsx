"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation"; // ✅ Added for auto-fill
import { ShoppingBag, Package, Truck, Bike, PackageCheck, X } from "lucide-react";

export default function TrackOrderPage() {
  const params = useParams(); // ✅ Captures the AWB from the URL
  const [waybill, setWaybill] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  // --- 1. THE TRACKING LOGIC ---
  const handleTrack = useCallback(async (id: string) => {
    if (!id.trim()) return;

    setLoading(true);
    setError("");
    setTrackingData(null);
    setShowDetails(false);

    try {
      const res = await fetch(`/api/track?waybill=${id}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to find tracking details.");

      if (data.ShipmentData && data.ShipmentData.length > 0) {
        setTrackingData(data.ShipmentData[0].Shipment);
      } else {
        setError("No tracking information found. Please check your AWB and try again.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  // --- 2. THE AUTO-FILL/AUTO-TRACK TRIGGER ---
  useEffect(() => {
    if (params?.awb) {
      const urlAwb = params.awb as string;
      setWaybill(urlAwb);      // Fills the input box
      handleTrack(urlAwb);     // Starts tracking immediately
    }
  }, [params?.awb, handleTrack]);

  // --- 3. UI HELPERS ---
  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showDetails]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    return `${day} ${month} ${year}, ${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  };

  const renderTimeline = () => {
    if (!trackingData) return null;

    const scans = trackingData.Scans || [];
    const findScan = (keywords: string[]) => {
      return scans.find((s: any) => 
        keywords.some((k) => (s.ScanDetail?.Scan || "").toLowerCase().includes(k))
      )?.ScanDetail;
    };

    const orderedScan = scans[scans.length - 1]?.ScanDetail; 
    const readyScan = findScan(["manifest", "ready"]);
    const pickupScan = findScan(["pickup", "dispatch"]);
    const transitScan = findScan(["transit", "arrived", "departed", "connection", "pending"]);
    const ofdScan = findScan(["out for delivery", "ofd"]);
    const deliveredScan = findScan(["delivered"]);

    let activeIndex = 0;
    if (deliveredScan) activeIndex = 5;
    else if (ofdScan) activeIndex = 4;
    else if (transitScan) activeIndex = 3;
    else if (pickupScan) activeIndex = 2;
    else if (readyScan) activeIndex = 1;

    const expectedDate = trackingData.ExpectedDeliveryDate
      ? `Estimated date: ${new Date(trackingData.ExpectedDeliveryDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}`
      : "";

    const milestones = [
      { title: "Order Received", icon: ShoppingBag, date: orderedScan?.ScanDateTime ? formatDate(orderedScan.ScanDateTime) : "Processing", extra: "" },
      { title: "Ready To Ship", icon: Package, date: readyScan?.ScanDateTime ? formatDate(readyScan.ScanDateTime) : "", extra: "" },
      { title: "Scheduled for Pickup", icon: Truck, date: pickupScan?.ScanDateTime ? formatDate(pickupScan.ScanDateTime) : "", extra: "" },
      { title: "In-transit", icon: Truck, date: transitScan?.ScanDateTime ? formatDate(transitScan.ScanDateTime) : "", extra: transitScan?.Instructions || (transitScan?.ScannedLocation ? `Location: ${transitScan.ScannedLocation}` : "") },
      { title: "Out for delivery", icon: Bike, date: ofdScan?.ScanDateTime ? formatDate(ofdScan.ScanDateTime) : "", extra: "" },
      { title: "Delivered", icon: PackageCheck, date: deliveredScan?.ScanDateTime ? formatDate(deliveredScan.ScanDateTime) : expectedDate, extra: "" }
    ];

    const activeColor = "#5C67E6"; 
    const grayColor = "#D1D5DB";

    return (
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {milestones.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;
          const isFuture = index > activeIndex;
          const showLine = index !== milestones.length - 1;
          const lineCompleted = index < activeIndex; 

          return (
            <div key={index} style={{ display: "flex", gap: "20px", position: "relative" }}>
              {showLine && (
                <div style={{ position: "absolute", left: "19px", top: "40px", bottom: "-10px", width: "2px", backgroundColor: lineCompleted ? activeColor : grayColor, zIndex: 0 }} />
              )}
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                backgroundColor: isCompleted ? activeColor : "#fff",
                border: `2px solid ${isCompleted ? activeColor : (isActive ? activeColor : "#9CA3AF")}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: isCompleted ? "#fff" : (isActive ? activeColor : "#9CA3AF"), zIndex: 1
              }}>
                <step.icon size={20} />
              </div>
              <div style={{ paddingBottom: "40px", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: isActive ? "600" : "500", color: isFuture ? "#6B7280" : "#1F2937" }}>
                    {step.title}
                  </h4>
                  {isActive && index !== 5 && (
                    <button onClick={() => setShowDetails(true)} style={{ color: activeColor, fontSize: "0.95rem", fontWeight: "600", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                      More info
                    </button>
                  )}
                </div>
                {step.date && <p style={{ margin: "4px 0 0 0", color: isFuture ? "#9CA3AF" : "#6B7280", fontSize: "0.9rem" }}>{step.date}</p>}
                {isActive && step.extra && <p style={{ margin: "4px 0 0 0", color: "#9CA3AF", fontSize: "0.85rem" }}>{step.extra}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const getSortedScans = () => {
    if (!trackingData || !trackingData.Scans) return [];
    return [...trackingData.Scans].sort((a: any, b: any) => new Date(a.ScanDetail.ScanDateTime).getTime() - new Date(b.ScanDetail.ScanDateTime).getTime());
  };

  return (
    <div style={{ maxWidth: "800px", margin: "80px auto", padding: "0 20px", minHeight: "60vh" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>Track Your Order</h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>Enter your Delhivery AWB number for real-time delivery updates.</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleTrack(waybill); }} style={{ display: "flex", gap: "10px", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px auto" }}>
        <input
          type="text"
          placeholder="e.g., 123456789012"
          value={waybill}
          onChange={(e) => setWaybill(e.target.value)}
          style={{ flex: 1, padding: "15px 20px", fontSize: "1rem", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none" }}
          required
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "15px 30px", backgroundColor: "#1D2C34", color: "white", fontSize: "1rem", border: "none", borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Tracking..." : "Track"}
        </button>
      </form>

      {error && <div style={{ maxWidth: "500px", margin: "0 auto 20px auto", padding: "15px", backgroundColor: "#fff4f4", color: "#8e1919", borderRadius: "8px", borderLeft: "4px solid #8e1919" }}>{error}</div>}
      {renderTimeline()}

      {showDetails && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(2px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "20px" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "16px", width: "100%", maxWidth: "600px", maxHeight: "85vh", display: "flex", flexDirection: "column", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
            <div style={{ padding: "24px", borderBottom: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div><h2 style={{ margin: 0, fontSize: "1.75rem", fontWeight: "bold", color: "#374151" }}>Transit History</h2><p style={{ margin: "6px 0 0 0", color: "#6B7280", fontSize: "0.95rem" }}>All tracking history details</p></div>
              <button onClick={() => setShowDetails(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "4px" }}><X size={24} /></button>
            </div>
            <div style={{ padding: "30px 24px", overflowY: "auto", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {getSortedScans().map((scanObj: any, i: number, arr: any[]) => {
                  const isLast = i === arr.length - 1;
                  const scan = scanObj.ScanDetail;
                  const activeColor = "#5C67E6";
                  return (
                    <div key={i} style={{ display: "flex", gap: "20px", position: "relative" }}>
                      {!isLast && <div style={{ position: "absolute", left: "11px", top: "30px", bottom: "-5px", width: "2px", backgroundColor: activeColor, zIndex: 0 }} />}
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#fff", border: `2px solid ${activeColor}`, display: "flex", alignItems: "center", justifyContent: "center", color: activeColor, zIndex: 1, marginTop: "2px", flexShrink: 0 }}>
                        {isLast ? <Truck size={14} /> : <div style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "transparent"}} />}
                      </div>
                      <div style={{ paddingBottom: "35px", flex: 1 }}>
                        <div style={{ fontWeight: 600, color: isLast ? activeColor : "#374151", fontSize: "0.95rem" }}>{formatDate(scan.ScanDateTime)}</div>
                        <div style={{ color: isLast ? activeColor : "#6B7280", fontSize: "0.9rem", marginTop: "4px", lineHeight: "1.4" }}>{scan.Scan} {scan.ScannedLocation ? `at ${scan.ScannedLocation}` : ""}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}