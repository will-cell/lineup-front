import { 
  UsersIcon, 
  ClockIcon, 
  BellIcon, 
  ReceiptPercentIcon
} from '@heroicons/react/24/outline';
import { StatCard } from '../components/StatCard';
import { TicketCard } from '../components/TicketCard';
import { useStore } from '../../core/useCases/store';

export const HomePage = () => {
  const { tickets, restaurant } = useStore();
  
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

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Tableau de bord</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Personnes en attente"
          value={tickets.length}
          icon={<UsersIcon className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Temps d'attente moyen"
          value={`${calculateAverageWaitTime()} min`}
          icon={<ClockIcon className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Délai de notification"
          value={`${restaurant.notificationDelay} min`}
          icon={<BellIcon className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Places disponibles"
          value={getAvailableSeats()}
          icon={<ReceiptPercentIcon className="h-6 w-6 text-indigo-600" />}
        />
      </div>

      {/* Tickets List */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Liste d'attente</h2>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
          {tickets.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              Aucun client en attente pour le moment
            </p>
          )}
        </div>
      </div>
    </div>
  );
};