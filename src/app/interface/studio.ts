export interface StudioEntity {
  Studios: Studio[];
}
export interface Studio {
  Id: number;
  Name: string;
  Type: string;
  Location: Location;
  Contact: Contact;
  Amenities: string[];
  Description: string;
  PricePerHour: number;
  Currency: string;
  Availability: Availability;
  Rating: number;
  Images: string[];
}
interface Availability {
  Open: string;
  Close: string;
}
interface Contact {
  Phone: string;
  Email: string;
}
interface Location {
  City: string;
  Area: string;
  Address: string;
  Coordinates: Coordinates;
}
interface Coordinates {
  Latitude: number;
  Longitude: number;
}