import { create } from 'zustand';
import { Restaurant, Ticket } from '../domain/entities';

interface Store {
  // État
  restaurant: Restaurant;
  tickets: Ticket[];
  
  // Actions
  updateRestaurant: (restaurant: Partial<Restaurant>) => void;
  addTicket: (ticket: Ticket) => void;
  updateTicket: (ticketId: string, updates: Partial<Ticket>) => void;
  removeTicket: (ticketId: string) => void;
}

// Mock data pour le développement
const mockRestaurant: Restaurant = {
  id: '1',
  name: 'Restaurant Test',
  totalSeats: 50,
  serviceStartTime: '11:00',
  serviceEndTime: '23:00',
  ticketTimeStep: 15,
  notificationDelay: 30
};

// Données de test pour les tickets
const mockTickets: Ticket[] = [
  {
    id: '1',
    firstName: 'Jean',
    lastName: 'Dupont',
    partySize: 4,
    createdAt: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes d'attente
    estimatedArrivalTime: new Date(Date.now() + 15 * 60 * 1000),
    status: 'waiting'
  },
  {
    id: '2',
    firstName: 'Marie-Christine',
    lastName: 'De La Rochefoucauld',
    partySize: 2,
    createdAt: new Date(Date.now() - 20 * 60 * 1000),
    estimatedArrivalTime: new Date(Date.now() + 40 * 60 * 1000),
    status: 'waiting'
  },
  {
    id: '3',
    firstName: 'Li',
    lastName: 'Wei',
    partySize: 1,
    createdAt: new Date(Date.now() - 10 * 60 * 1000),
    estimatedArrivalTime: new Date(Date.now() + 50 * 60 * 1000),
    status: 'notified'
  },
  {
    id: '4',
    firstName: 'Alessandro',
    lastName: 'Rossi',
    partySize: 6,
    createdAt: new Date(Date.now() - 60 * 60 * 1000), // 1 heure d'attente
    estimatedArrivalTime: new Date(Date.now() + 5 * 60 * 1000),
    status: 'notified'
  },
  {
    id: '5',
    firstName: 'Sophie',
    lastName: 'Martin',
    partySize: 3,
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    estimatedArrivalTime: new Date(Date.now() + 30 * 60 * 1000),
    status: 'waiting'
  }
];

export const useStore = create<Store>((set) => ({
  restaurant: mockRestaurant,
  tickets: mockTickets,
  
  updateRestaurant: (updates) =>
    set((state) => ({
      restaurant: { ...state.restaurant, ...updates }
    })),
    
  addTicket: (ticket) =>
    set((state) => ({
      tickets: [...state.tickets, ticket]
    })),
    
  updateTicket: (ticketId, updates) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, ...updates } : ticket
      )
    })),
    
  removeTicket: (ticketId) =>
    set((state) => ({
      tickets: state.tickets.filter((ticket) => ticket.id !== ticketId)
    }))
}));