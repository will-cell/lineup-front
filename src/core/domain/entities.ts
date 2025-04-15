export interface Restaurant {
  id: string;
  name: string;
  totalSeats: number;
  serviceStartTime: string;
  serviceEndTime: string;
  ticketTimeStep: number;
  notificationDelay: number;
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