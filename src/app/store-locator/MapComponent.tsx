"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Store } from "../data/stores";

// Create gold marker icon lazily to avoid SSR issues
let cachedGoldIcon: L.DivIcon | null = null;

function getGoldIcon(): L.DivIcon {
  if (!cachedGoldIcon) {
    // Fix default marker icons first
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    cachedGoldIcon = new L.DivIcon({
      className: "custom-marker",
      html: `<div style="
        width: 16px;
        height: 16px;
        background: #C9A96E;
        border: 2px solid #0A0A09;
        border-radius: 50%;
        box-shadow: 0 0 12px rgba(201, 169, 110, 0.6);
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  }
  return cachedGoldIcon;
}

// Component to handle flying to selected store
function FlyToStore({ store }: { store: Store | null }) {
  const map = useMap();
  const prevStoreId = useRef<string | null>(null);

  useEffect(() => {
    if (store && store.id !== prevStoreId.current) {
      map.flyTo([store.coordinates.lat, store.coordinates.lng], 14, {
        duration: 1.5,
      });
      prevStoreId.current = store.id;
    }
  }, [store, map]);

  return null;
}

// Component to handle map resize and invalidation
function MapController() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 300);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

interface MapComponentProps {
  stores: Store[];
  selectedStore: Store | null;
  onStoreSelect: (store: Store) => void;
  defaultLocation: [number, number];
}

export default function MapComponent({
  stores,
  selectedStore,
  onStoreSelect,
  defaultLocation,
}: MapComponentProps) {
  const hasStores = stores.length > 0;
  const [goldIcon, setGoldIcon] = useState<L.DivIcon | null>(null);

  // Initialize icon only on client side
  useEffect(() => {
    setGoldIcon(getGoldIcon());
  }, []);

  // Calculate map center and zoom
  const mapCenter: [number, number] = hasStores
    ? selectedStore
      ? [selectedStore.coordinates.lat, selectedStore.coordinates.lng]
      : [stores[0].coordinates.lat, stores[0].coordinates.lng]
    : defaultLocation;

  const mapZoom = hasStores ? (stores.length === 1 ? 14 : 3) : 13;

  // Don't render map until icon is ready
  if (!goldIcon) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#11100E",
        color: "#6B6660",
        fontFamily: "'Jost', sans-serif",
      }}>
        Loading map...
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Store markers */}
        {hasStores ? (
          stores.map((store) => (
            <Marker
              key={store.id}
              position={[store.coordinates.lat, store.coordinates.lng]}
              icon={goldIcon}
              eventHandlers={{
                click: () => onStoreSelect(store),
              }}
            >
              <Popup>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#0A0A09",
                    padding: "4px 0",
                  }}
                >
                  <strong style={{ fontSize: "13px" }}>{store.name}</strong>
                  <br />
                  <span style={{ fontSize: "11px", color: "#666" }}>
                    {store.city}, {store.country}
                  </span>
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          /* Default marker when no stores found */
          <Marker position={defaultLocation} icon={goldIcon}>
            <Popup>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0A0A09",
                  padding: "4px 0",
                }}
              >
                <strong style={{ fontSize: "13px" }}>Maison Noiré</strong>
                <br />
                <span style={{ fontSize: "11px", color: "#666" }}>
                  Paris, France — Headquarters
                </span>
              </div>
            </Popup>
          </Marker>
        )}

        <FlyToStore store={selectedStore} />
        <MapController />
      </MapContainer>

      {/* No results overlay */}
      {!hasStores && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "rgba(10, 10, 9, 0.9)",
            border: "1px solid rgba(201, 169, 110, 0.3)",
            padding: "1.5rem 2.5rem",
            textAlign: "center" as const,
            color: "#FAF8F4",
            fontFamily: "'Jost', sans-serif",
            pointerEvents: "none",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              margin: "0 0 0.5rem",
              color: "#C9A96E",
              fontStyle: "italic",
            }}
          >
            No Stores Found
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#B0ABA4",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Showing our Paris headquarters
            <br />
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}