export interface Restaurant {
  id: string;
  name: string;
  totalSeats: number;
  serviceStartTime: string;
  serviceEndTime: string;
  ticketTimeStep: number;
  notification_threshold: number;
}

export interface Ticket {
  id: string;
  firstName: string;
  lastName: string;
  partySize: number;
  createdAt: Date;
  estimatedArrivalTime: Date;
  status: 'waiting' | 'notified' | 'seated' | 'cancelled';
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  restaurant: Restaurant;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}