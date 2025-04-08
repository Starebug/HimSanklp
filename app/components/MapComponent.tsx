// components/MapComponent.tsx
"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const libraries: any = ["places"];

export default function MapComponent({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ,
    libraries,
  });

  const [location, setLocation] = useState({ lat: 28.6139, lng: 77.209 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });
        onLocationSelect(latitude, longitude);
      });
    }
  }, []);

  if (!isLoaded) return <div className="text-white">Loading Map...</div>;

  const handleDrag = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      setLocation({ lat, lng });
      onLocationSelect(lat, lng);
    }
  };

  return (
    <div className="mt-6">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} draggable onDragEnd={handleDrag} />
      </GoogleMap>
    </div>
  );
}
