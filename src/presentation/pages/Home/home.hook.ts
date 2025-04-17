import { useStore } from '../../../core/useCases/store';
import { useAuthStore } from '../../../core/useCases/authStore';

export const useHome = () => {
    const { tickets, restaurant } = useStore();
    const { user } = useAuthStore();
    
    const calculateAverageWaitTime = () => {
      if (tickets.length === 0) return 0;
      const totalWaitTime = tickets.reduce((acc, ticket) => {
        const waitTime = ticket.estimatedArrivalTime.getTime() - ticket.createdAt.getTime();
        return acc + waitTime;
      }, 0);
      return Math.round(totalWaitTime / tickets.length / (1000 * 60)); // Convert to minutes
    };
  
    const getAvailableSeats = () => {
      const occupiedSeats = tickets.reduce((acc, ticket) => acc + ticket.partySize, 0);
      return Math.max(0, restaurant.totalSeats - occupiedSeats);
    };

    return {
        tickets,
        restaurant,
        user,
        calculateAverageWaitTime,
        getAvailableSeats
    };
};