import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Ticket } from '../../core/domain/entities';
import { UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  const getWaitingTime = () => {
    const now = new Date();
    const waitingTime = Math.floor((now.getTime() - ticket.createdAt.getTime()) / (1000 * 60));
    return `${waitingTime} min`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {ticket.firstName} {ticket.lastName}
          </h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UsersIcon className="h-5 w-5 mr-1" />
            {ticket.partySize} {ticket.partySize > 1 ? 'personnes' : 'personne'}
          </div>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <ClockIcon className="h-5 w-5 mr-1" />
            En attente depuis {getWaitingTime()}
          </div>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 rounded-full text-sm font-medium" 
                style={{ 
                  backgroundColor: ticket.status === 'waiting' ? '#FEF3C7' : '#E0E7FF',
                  color: ticket.status === 'waiting' ? '#92400E' : '#3730A3'
                }}>
            {ticket.status === 'waiting' ? 'En attente' : 'Notifié'}
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Arrivée prévue à {format(ticket.estimatedArrivalTime, 'HH:mm', { locale: fr })}
          </p>
        </div>
      </div>
    </div>
  );
};