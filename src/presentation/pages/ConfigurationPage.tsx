import { useState } from 'react';
import { useStore } from '../../core/useCases/store';

export const ConfigurationPage = () => {
  const { restaurant, updateRestaurant } = useStore();
  const [formData, setFormData] = useState({
    totalSeats: restaurant.totalSeats,
    ticketTimeStep: restaurant.ticketTimeStep,
    serviceStartTime: restaurant.serviceStartTime,
    serviceEndTime: restaurant.serviceEndTime,
    notificationDelay: restaurant.notificationDelay
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRestaurant(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Configuration du restaurant</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-lg p-6">
        <div>
          <label htmlFor="totalSeats" className="block text-sm font-medium text-gray-700">
            Nombre total de places
          </label>
          <input
            type="number"
            id="totalSeats"
            value={formData.totalSeats}
            onChange={(e) => setFormData({ ...formData, totalSeats: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="ticketTimeStep" className="block text-sm font-medium text-gray-700">
            Intervalle entre les tickets (minutes)
          </label>
          <input
            type="number"
            id="ticketTimeStep"
            value={formData.ticketTimeStep}
            onChange={(e) => setFormData({ ...formData, ticketTimeStep: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="notificationDelay" className="block text-sm font-medium text-gray-700">
            Délai de notification (minutes)
          </label>
          <input
            type="number"
            id="notificationDelay"
            value={formData.notificationDelay}
            onChange={(e) => setFormData({ ...formData, notificationDelay: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="serviceStartTime" className="block text-sm font-medium text-gray-700">
            Heure de début du service
          </label>
          <input
            type="time"
            id="serviceStartTime"
            value={formData.serviceStartTime}
            onChange={(e) => setFormData({ ...formData, serviceStartTime: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="serviceEndTime" className="block text-sm font-medium text-gray-700">
            Heure de fin du service
          </label>
          <input
            type="time"
            id="serviceEndTime"
            value={formData.serviceEndTime}
            onChange={(e) => setFormData({ ...formData, serviceEndTime: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
};