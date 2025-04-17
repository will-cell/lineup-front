import { useStore } from '../../../core/useCases/store';
import { useAuthenticatedUser } from '../../../core/useCases/hooks/useAuthenticatedUser';

export const useHome = () => {
    const { tickets } = useStore();
    const user = useAuthenticatedUser();
  
    const getAvailableSeats = () => {
      const occupiedSeats = tickets.reduce((acc, ticket) => acc + ticket.partySize, 0);
      return Math.max(0, user.restaurant.capacity - occupiedSeats);
    };

    return {
        tickets,
        restaurant: user.restaurant,
        getAvailableSeats
    };
};