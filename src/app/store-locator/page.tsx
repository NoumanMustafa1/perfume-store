"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Navigation,
  X,
  Filter,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { STORES, Store } from "../data/stores";


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


// Dynamic import for map
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#11100E",
        color: "#6B6660",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      Loading map...
    </div>
  ),
});

// Default location - Paris, France (Maison Noiré headquarters)
const DEFAULT_LOCATION: [number, number] = [48.8566, 2.3522];

export default function StoreLocator() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileList, setShowMobileList] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Filter stores
  const filteredStores = useMemo(() => {
    let stores = [...STORES];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      stores = stores.filter(
        (store) =>
          store.city.toLowerCase().includes(query) ||
          store.country.toLowerCase().includes(query) ||
          store.name.toLowerCase().includes(query)
      );
    }

    if (filterType !== "all") {
      stores = stores.filter((store) => store.type === filterType);
    }

    return stores;
  }, [searchQuery, filterType]);

  const getDirectionsUrl = (store: Store) => {
    const { lat, lng } = store.coordinates;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      flagship: "Flagship",
      boutique: "Boutique",
      counter: "Department Store Counter",
    };
    return labels[type] || type;
  };

  const getTypeStyle = (type: string): React.CSSProperties => {
    const styles: Record<string, React.CSSProperties> = {
      flagship: {
        background: "rgba(201, 169, 110, 0.15)",
        color: "#C9A96E",
        border: "1px solid rgba(201, 169, 110, 0.3)",
      },
      boutique: {
        background: "rgba(255, 255, 255, 0.05)",
        color: "#FAF8F4",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      },
      counter: {
        background: "rgba(107, 102, 96, 0.1)",
        color: "#6B6660",
        border: "1px solid rgba(107, 102, 96, 0.2)",
      },
    };
    return styles[type] || styles.boutique;
  };

  return (
    <main style={s.root}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerTop}>
          <button onClick={() => router.back()} style={s.backBtn}>
            <ArrowLeft size={18} />
          </button>
          <div>
            <p style={s.eyebrow}>Find a Location</p>
            <h1 style={s.title}>
              Our <span style={s.titleItalic}>Stores</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={s.searchSection}>
        <div style={s.searchInputWrap}>
          <Search size={16} color="#6B6660" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, country or store name..."
            style={s.searchInput}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} style={s.clearBtn}>
              <X size={14} color="#6B6660" />
            </button>
          )}
        </div>

        <div style={s.filterRow}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={s.filterBtn}
          >
            <Filter size={14} />
            Filter
          </button>

          <span style={s.resultCount}>
            {filteredStores.length} store{filteredStores.length !== 1 ? "s" : ""}
          </span>
        </div>

        {showFilters && (
          <div style={s.filterOptions}>
            {["all", "flagship", "boutique", "counter"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilterType(type);
                  setSelectedStore(null);
                }}
                style={{
                  ...s.filterOption,
                  ...(filterType === type ? s.filterOptionActive : {}),
                }}
              >
                {type === "all" ? "All Stores" : getTypeLabel(type)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={s.mainContent}>
        {/* Store List */}
        <div style={s.storeList}>
          {filteredStores.length === 0 ? (
            <div style={s.noResults}>
              <MapPin size={32} color="#6B6660" />
              <p style={s.noResultsTitle}>No stores found</p>
              <p style={s.noResultsSub}>
                Try adjusting your search or browse all locations
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
                style={s.resetBtn}
              >
                View All Stores
              </button>
            </div>
          ) : (
            filteredStores.map((store) => (
              <button
                key={store.id}
                onClick={() => {
                  setSelectedStore(store);
                  if (isMobile) setShowMobileList(false);
                }}
                style={{
                  ...s.storeCard,
                  ...(selectedStore?.id === store.id
                    ? s.storeCardActive
                    : {}),
                }}
              >
                <div style={s.storeCardContent}>
                  <div style={s.storeHeader}>
                    <h3 style={s.storeName}>{store.name}</h3>
                    <span
                      style={{
                        ...s.typeBadge,
                        ...getTypeStyle(store.type),
                      }}
                    >
                      {getTypeLabel(store.type)}
                    </span>
                  </div>

                  <div style={s.storeInfo}>
                    <div style={s.infoRow}>
                      <MapPin size={14} color="#C9A96E" />
                      <span>
                        {store.address}, {store.city}, {store.country}
                      </span>
                    </div>
                    <div style={s.infoRow}>
                      <Phone size={14} color="#C9A96E" />
                      <span>{store.phone}</span>
                    </div>
                    <div style={s.infoRow}>
                      <Clock size={14} color="#C9A96E" />
                      <span style={{ whiteSpace: "pre-line" }}>
                        {store.hours}
                      </span>
                    </div>
                  </div>

                  <div style={s.servicesRow}>
                    {store.services.slice(0, 3).map((service) => (
                      <span key={service} style={s.serviceTag}>
                        {service}
                      </span>
                    ))}
                    {store.services.length > 3 && (
                      <span style={s.serviceTag}>
                        +{store.services.length - 3}
                      </span>
                    )}
                  </div>

                  <a
                    href={getDirectionsUrl(store)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={s.directionsBtn}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Navigation size={14} />
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div style={s.storeImage}>
                  <img
                    src={store.image}
                    alt={store.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Map */}
        <div style={s.mapContainer}>
          <MapComponent
            stores={filteredStores}
            selectedStore={selectedStore}
            onStoreSelect={setSelectedStore}
            defaultLocation={DEFAULT_LOCATION}
          />
        </div>
      </div>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setShowMobileList(!showMobileList)}
          style={s.mobileToggle}
        >
          {showMobileList ? "Show Map" : "Show Stores"}
        </button>
      )}
    </main>
  );
}

/* ----------------------------- STYLES ----------------------------- */

const s: Record<string, React.CSSProperties> = {
  root: {
    background: "#0A0A09",
    color: "#FAF8F4",
    fontFamily: "'Jost', sans-serif",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  header: {
    padding: "1.5rem 2.5rem",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    flexShrink: 0,
  },

  headerTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
  },

  backBtn: {
    background: "none",
    border: "none",
    color: "#6B6660",
    cursor: "pointer",
    padding: "0.5rem",
    marginTop: "0.2rem",
  },

  eyebrow: {
    fontSize: ".72rem",
    letterSpacing: ".4em",
    textTransform: "uppercase" as const,
    color: "#C9A96E",
    marginBottom: "0.5rem",
  },

  title: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "2rem",
    margin: 0,
    color: "#FAF8F4",
  },

  titleItalic: {
    fontStyle: "italic",
    color: "#C9A96E",
  },

  searchSection: {
    padding: "1.2rem 2.5rem",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    flexShrink: 0,
  },

  searchInputWrap: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.1)",
    padding: "0.7rem 1.2rem",
    maxWidth: "450px",
  },

  searchInput: {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#FAF8F4",
    width: "100%",
    fontSize: ".85rem",
    fontFamily: "'Jost', sans-serif",
  },

  clearBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.2rem",
  },

  filterRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "0.8rem",
  },

  filterBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "none",
    border: "1px solid rgba(255,255,255,.15)",
    color: "#B0ABA4",
    padding: "0.5rem 1rem",
    fontSize: ".75rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  resultCount: {
    fontSize: ".72rem",
    color: "#6B6660",
    letterSpacing: ".1em",
  },

  filterOptions: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.8rem",
    flexWrap: "wrap" as const,
  },

  filterOption: {
    background: "none",
    border: "1px solid rgba(255,255,255,.1)",
    color: "#6B6660",
    padding: "0.4rem 1rem",
    fontSize: ".72rem",
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
    letterSpacing: ".08em",
    transition: "all 0.3s ease",
  },

  filterOptionActive: {
    background: "rgba(201, 169, 110, 0.1)",
    color: "#C9A96E",
    border: "1px solid #C9A96E",
  },

  mainContent: {
    display: "flex",
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
  },

  storeList: {
    width: "420px",
    overflowY: "auto",
    borderRight: "1px solid rgba(255,255,255,.06)",
    background: "#0A0A09",
    flexShrink: 0,
  },

  storeCard: {
    width: "100%",
    display: "flex",
    padding: "1.5rem",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,.04)",
    borderLeft: "2px solid transparent", // Add this explicit property
    cursor: "pointer",
    textAlign: "left" as const,
    color: "#FAF8F4",
    fontFamily: "'Jost', sans-serif",
    transition: "background 0.3s, border-left-color 0.3s",
  },

  storeCardActive: {
    background: "rgba(201, 169, 110, 0.05)",
    borderLeft: "2px solid #C9A96E",
  },

  storeCardContent: {
    flex: 1,
  },

  storeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1rem",
    gap: "0.5rem",
  },

  storeName: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontSize: "1.1rem",
    margin: 0,
    color: "#FAF8F4",
  },

  typeBadge: {
    fontSize: ".6rem",
    padding: "0.2rem 0.6rem",
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
  },

  storeInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    marginBottom: "1rem",
  },

  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
    fontSize: ".78rem",
    color: "#B0ABA4",
  },

  servicesRow: {
    display: "flex",
    gap: "0.4rem",
    flexWrap: "wrap" as const,
    marginBottom: "1rem",
  },

  serviceTag: {
    fontSize: ".65rem",
    padding: "0.2rem 0.5rem",
    background: "rgba(255,255,255,.03)",
    border: "1px solid rgba(255,255,255,.08)",
    color: "#6B6660",
  },

  directionsBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#C9A96E",
    textDecoration: "none",
    fontSize: ".72rem",
    letterSpacing: ".1em",
    textTransform: "uppercase" as const,
    padding: "0.4rem 0",
    borderBottom: "1px solid transparent",
  },

  storeImage: {
    width: "80px",
    height: "80px",
    marginLeft: "1rem",
    overflow: "hidden",
    flexShrink: 0,
  },

  mapContainer: {
    flex: 1,
    background: "#11100E",
    position: "relative" as const,
    height: "100%",
  },

  noResults: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    textAlign: "center",
    color: "#6B6660",
    gap: "0.8rem",
  },

  noResultsTitle: {
    fontSize: "1rem",
    color: "#B0ABA4",
    fontFamily: "'Playfair Display', serif",
    margin: 0,
  },

  noResultsSub: {
    fontSize: ".78rem",
    color: "#6B6660",
    margin: 0,
  },

  resetBtn: {
    marginTop: "0.5rem",
    background: "none",
    border: "1px solid #C9A96E",
    color: "#C9A96E",
    padding: "0.5rem 1.5rem",
    fontSize: ".7rem",
    letterSpacing: ".1em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Jost', sans-serif",
  },

  mobileToggle: {
    position: "fixed",
    bottom: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#C9A96E",
    color: "#0A0A09",
    border: "none",
    padding: "0.8rem 2rem",
    fontSize: ".78rem",
    letterSpacing: ".15em",
    textTransform: "uppercase" as const,
    fontFamily: "'Jost', sans-serif",
    fontWeight: 500,
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 10px 30px rgba(0,0,0,.5)",
  },
};