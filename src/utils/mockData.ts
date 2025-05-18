export interface Property {
  id: string;
  address: string;
  price: number;
}

export const mockListings: Property[] = [
  { id: '1', address: '123 Ocean Ave', price: 1200000 },
  { id: '2', address: '456 Mountain Rd', price: 850000 },
  { id: '3', address: '789 Sunset Blvd', price: 640000 },
];
