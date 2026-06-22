export interface Store {
    id: string;
    name: string;
    type: 'flagship' | 'boutique' | 'counter';
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    phone: string;
    hours: string;
    services: string[];
    image: string;
  }
  
  export const STORES: Store[] = [
    {
      id: 'paris-flagship',
      name: 'Maison Noiré — Le Marais',
      type: 'flagship',
      address: '24 Rue des Francs-Bourgeois',
      city: 'Paris',
      country: 'France',
      coordinates: {
        lat: 48.8566,
        lng: 2.3522,
      },
      phone: '+33 1 42 72 60 00',
      hours: 'Mon–Sat: 10:00–19:00\nSun: 11:00–18:00',
      services: ['Bespoke Consultations', 'Private Salon', 'Gift Wrapping', 'Engraving'],
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6a?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'london-boutique',
      name: 'Noiré — Mayfair',
      type: 'boutique',
      address: '17 Savile Row',
      city: 'London',
      country: 'United Kingdom',
      coordinates: {
        lat: 51.5074,
        lng: -0.1278,
      },
      phone: '+44 20 7123 4567',
      hours: 'Mon–Sat: 10:00–18:00\nSun: Closed',
      services: ['Personal Shopping', 'Gift Wrapping'],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'dubai-boutique',
      name: 'Noiré — Dubai Mall',
      type: 'boutique',
      address: 'The Dubai Mall, Financial Center Rd',
      city: 'Dubai',
      country: 'UAE',
      coordinates: {
        lat: 25.2048,
        lng: 55.2708,
      },
      phone: '+971 4 567 8900',
      hours: 'Daily: 10:00–00:00',
      services: ['Bespoke Consultations', 'Gift Wrapping', 'Engraving'],
      image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'nyc-flagship',
      name: 'Noiré — Madison Avenue',
      type: 'flagship',
      address: '745 Madison Avenue',
      city: 'New York',
      country: 'United States',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060,
      },
      phone: '+1 212-555-0189',
      hours: 'Mon–Sat: 10:00–20:00\nSun: 12:00–18:00',
      services: ['Bespoke Consultations', 'Private Salon', 'Gift Wrapping', 'Engraving', 'Custom Events'],
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'milan-boutique',
      name: 'Noiré — Via Monte Napoleone',
      type: 'boutique',
      address: 'Via Monte Napoleone, 8',
      city: 'Milan',
      country: 'Italy',
      coordinates: {
        lat: 45.4642,
        lng: 9.1900,
      },
      phone: '+39 02 4567 8900',
      hours: 'Mon–Sat: 10:00–19:00\nSun: Closed',
      services: ['Personal Shopping', 'Gift Wrapping'],
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'tokyo-boutique',
      name: 'Noiré — Ginza',
      type: 'boutique',
      address: '4-5-11 Ginza, Chuo-ku',
      city: 'Tokyo',
      country: 'Japan',
      coordinates: {
        lat: 35.6762,
        lng: 139.6503,
      },
      phone: '+81 3-1234-5678',
      hours: 'Daily: 11:00–20:00',
      services: ['Bespoke Consultations', 'Gift Wrapping', 'Engraving'],
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'lahore-boutique',
      name: 'Noiré — Gulberg',
      type: 'boutique',
      address: '23 MM Alam Road, Gulberg III',
      city: 'Lahore',
      country: 'Pakistan',
      coordinates: {
        lat: 31.5497,
        lng: 74.3436,
      },
      phone: '+92 42 3567 8900',
      hours: 'Mon–Sat: 11:00–21:00\nSun: 13:00–20:00',
      services: ['Bespoke Consultations', 'Gift Wrapping'],
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 'sydney-counter',
      name: 'Noiré — David Jones',
      type: 'counter',
      address: '86-108 Castlereagh St',
      city: 'Sydney',
      country: 'Australia',
      coordinates: {
        lat: -33.8688,
        lng: 151.2093,
      },
      phone: '+61 2 9876 5432',
      hours: 'Mon–Sat: 09:30–18:00\nSun: 10:00–18:00',
      services: ['Personal Shopping'],
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80&auto=format&fit=crop',
    },
  ];