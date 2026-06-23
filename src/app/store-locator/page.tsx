"use client";

import { useState, useEffect, useMemo } from "react";
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
import "./store-locator.css";

// Dynamic import for map - ALL Leaflet code is inside MapComponent
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="store-locator-map-loading">
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

  const getTypeBadgeClass = (type: string) => {
    const classes: Record<string, string> = {
      flagship: "store-locator-badge-flagship",
      boutique: "store-locator-badge-boutique",
      counter: "store-locator-badge-counter",
    };
    return classes[type] || classes.boutique;
  };

  return (
    <main className="store-locator-root">
      {/* Header */}
      <div className="store-locator-header">
        <div className="store-locator-header-top">
          <button onClick={() => router.back()} className="store-locator-back-btn">
            <ArrowLeft size={18} />
          </button>
          <div>
            <p className="store-locator-eyebrow">Find a Location</p>
            <h1 className="store-locator-title">
              Our <span className="store-locator-title-italic">Stores</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="store-locator-search-section">
        <div className="store-locator-search-wrap">
          <Search size={16} color="#6B6660" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, country or store name..."
            className="store-locator-search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="store-locator-clear-btn">
              <X size={14} color="#6B6660" />
            </button>
          )}
        </div>

        <div className="store-locator-filter-row">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="store-locator-filter-btn"
          >
            <Filter size={14} />
            Filter
          </button>

          <span className="store-locator-result-count">
            {filteredStores.length} store{filteredStores.length !== 1 ? "s" : ""}
          </span>
        </div>

        {showFilters && (
          <div className="store-locator-filter-options">
            {["all", "flagship", "boutique", "counter"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilterType(type);
                  setSelectedStore(null);
                }}
                className={`store-locator-filter-option ${
                  filterType === type ? "store-locator-filter-option-active" : ""
                }`}
              >
                {type === "all" ? "All Stores" : getTypeLabel(type)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="store-locator-main-content">
        {/* Store List */}
        <div className="store-locator-store-list">
          {filteredStores.length === 0 ? (
            <div className="store-locator-no-results">
              <MapPin size={32} color="#6B6660" />
              <p className="store-locator-no-results-title">No stores found</p>
              <p className="store-locator-no-results-sub">
                Try adjusting your search or browse all locations
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
                className="store-locator-reset-btn"
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
                className={`store-locator-store-card ${
                  selectedStore?.id === store.id ? "store-locator-store-card-active" : ""
                }`}
              >
                <div className="store-locator-store-card-content">
                  <div className="store-locator-store-header">
                    <h3 className="store-locator-store-name">{store.name}</h3>
                    <span className={`store-locator-type-badge ${getTypeBadgeClass(store.type)}`}>
                      {getTypeLabel(store.type)}
                    </span>
                  </div>

                  <div className="store-locator-store-info">
                    <div className="store-locator-info-row">
                      <MapPin size={14} color="#C9A96E" />
                      <span>
                        {store.address}, {store.city}, {store.country}
                      </span>
                    </div>
                    <div className="store-locator-info-row">
                      <Phone size={14} color="#C9A96E" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="store-locator-info-row">
                      <Clock size={14} color="#C9A96E" />
                      <span style={{ whiteSpace: "pre-line" }}>
                        {store.hours}
                      </span>
                    </div>
                  </div>

                  <div className="store-locator-services-row">
                    {store.services.slice(0, 3).map((service) => (
                      <span key={service} className="store-locator-service-tag">
                        {service}
                      </span>
                    ))}
                    {store.services.length > 3 && (
                      <span className="store-locator-service-tag">
                        +{store.services.length - 3}
                      </span>
                    )}
                  </div>

                  <a
                    href={getDirectionsUrl(store)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-locator-directions-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Navigation size={14} />
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="store-locator-store-image">
                  <img
                    src={store.image}
                    alt={store.name}
                  />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Map */}
        <div className="store-locator-map-container">
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
          className="store-locator-mobile-toggle"
        >
          {showMobileList ? "Show Map" : "Show Stores"}
        </button>
      )}
    </main>
  );
}