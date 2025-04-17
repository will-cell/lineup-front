import { useStore } from '../../../core/useCases/store';
import { useAuthenticatedUser } from '../../../core/useCases/hooks/useAuthenticatedUser';

export const useHome = () => {
    const { tickets } = useStore();
    const user = useAuthenticatedUser();
    
    const calculateAverageWaitTime = () => {
      if (tickets.length === 0) return 0;
      const totalWaitTime = tickets.reduce((acc, ticket) => {
        const waitTime = ticket.estimatedArrivalTime.getTime() - ticket.createdAt.getTime();
        return acc + waitTime;
      }, 0);
      return Math.round(totalWaitTime / tickets.length / (1000 * 60));
    };
  
    const getAvailableSeats = () => {
      const occupiedSeats = tickets.reduce((acc, ticket) => acc + ticket.partySize, 0);
      return Math.max(0, user.restaurant.totalSeats - occupiedSeats);
    };

    return {
        tickets,
        restaurant: user.restaurant,
        calculateAverageWaitTime,
        getAvailableSeats
    };
};