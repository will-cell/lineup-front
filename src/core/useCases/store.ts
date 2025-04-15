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

export const useStore = create<Store>((set) => ({
  restaurant: mockRestaurant,
  tickets: [],
  
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