import { ClockIcon, UserGroupIcon, BellIcon } from '@heroicons/react/24/outline';
import { useConfiguration } from './configuration.hook';

const ConfigBlock = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
                {icon}
            </div>
            <h2 className="ml-3 text-lg font-medium text-gray-900">{title}</h2>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const InputField = ({ label, id, ...props }: { label: string; id: string; [key: string]: any }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            id={id}
            {...props}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
);

export const Configuration = () => {
    const { formData, handleSubmit, handleInputChange } = useConfiguration();

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Configuration du restaurant</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Capacité */}
                    <ConfigBlock 
                        title="Capacité" 
                        icon={<UserGroupIcon className="h-6 w-6 text-indigo-600" />}
                    >
                        <InputField
                            label="Nombre total de places"
                            id="totalSeats"
                            type="number"
                            value={formData.totalSeats}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange('totalSeats', parseInt(e.target.value))}
                            min="1"
                        />
                    </ConfigBlock>

                    {/* Horaires de service */}
                    <ConfigBlock 
                        title="Horaires de service" 
                        icon={<ClockIcon className="h-6 w-6 text-indigo-600" />}
                    >
                        <InputField
                            label="Heure de début du service"
                            id="serviceStartTime"
                            type="time"
                            value={formData.serviceStartTime}
                            onChange={(e: { target: { value: string | number; }; }) => handleInputChange('serviceStartTime', e.target.value)}
                        />
                        <InputField
                            label="Heure de fin du service"
                            id="serviceEndTime"
                            type="time"
                            value={formData.serviceEndTime}
                            onChange={(e: { target: { value: string | number; }; }) => handleInputChange('serviceEndTime', e.target.value)}
                        />
                    </ConfigBlock>

                    {/* Paramètres d'attente */}
                    <ConfigBlock 
                        title="Paramètres d'attente" 
                        icon={<BellIcon className="h-6 w-6 text-indigo-600" />}
                    >
                        <InputField
                            label="Intervalle entre les tickets (minutes)"
                            id="ticketTimeStep"
                            type="number"
                            value={formData.ticketTimeStep}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange('ticketTimeStep', parseInt(e.target.value))}
                            min="1"
                        />
                        <InputField
                            label="Délai de notification (minutes)"
                            id="notificationDelay"
                            type="number"
                            value={formData.notificationDelay}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange('notificationDelay', parseInt(e.target.value))}
                            min="1"
                        />
                    </ConfigBlock>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    );
};