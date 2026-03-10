interface PageProps {
  params: {
    orderId: string;
  };
}

async function getTracking(orderId: string) {
  const res = await fetch(
    `https://track.delhivery.com/api/v1/packages/json/?waybill=${orderId}`,
    {
      headers: {
        Authorization: `Token ${process.env.DELHIVERY_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function TrackPage({ params }: PageProps) {
  const { orderId } = params;

  const data = await getTracking(orderId);

  const shipment = data?.ShipmentData?.[0]?.Shipment;

  return (
    <div style={{ maxWidth: 700, margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>Track your order</h1>

      <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
        <h2>Order #{orderId}</h2>

        <p>
          <strong>Status:</strong>{" "}
          {shipment?.Status?.Status || "Processing"}
        </p>

        <p>
          <strong>Courier:</strong> Delhivery
        </p>

        <p>
          <strong>Last Update:</strong>{" "}
          {shipment?.Status?.StatusDateTime}
        </p>
      </div>

      <h3 style={{ marginTop: 30 }}>Tracking Timeline</h3>

      {shipment?.Scans?.map((scan: any, index: number) => (
        <div
          key={index}
          style={{
            borderLeft: "3px solid #000",
            paddingLeft: 10,
            marginBottom: 15,
          }}
        >
          <strong>{scan.ScanDetail.Scan}</strong>
          <p>{scan.ScanDetail.ScanDateTime}</p>
          <p>{scan.ScanDetail.ScannedLocation}</p>
        </div>
      ))}
    </div>
  );
}