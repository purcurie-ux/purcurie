"use client";

import React from "react";
import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

export default function TestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      
      {/* Container Card */}
      <Card className="h-[300px] w-full max-w-[600px] p-0 overflow-hidden relative border border-gray-300 shadow-xl">
        
        {/* ✅ CORRECTED: Using 'center' and 'zoom' as required by docs */}
        <Map 
          center={[-74.006, 40.7128]} // [Longitude, Latitude]
          zoom={11}
        >
          <MapControls />
        </Map>

      </Card>
    </div>
  );
}