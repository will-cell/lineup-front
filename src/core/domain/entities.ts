export interface Restaurant {
  id: string;
  name: string;
  ownerId: string;
  latitude: number;
  longitude: number;
  address: string;
  capacity: number;
  waitingTimePerTicket: number; // Délai d'attente entre chaque ticket en minutes
  notificationThreshold: number; // Délai avant notification en minutes
  averageWaitingTime: number; // Temps d'attente moyen calculé
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
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