import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // When a user clicks: purcurie.com/track/49575810000092
        source: '/track/:awb',
        
        // It sends them to the CLEAN Delhivery URL (No '?' or 'awb=')
        destination: 'https://www.delhivery.com/track-v2/package/:awb', 
        
        permanent: false,
      },
    ]
  },
};
