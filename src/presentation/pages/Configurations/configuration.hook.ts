import { useState } from 'react';
import { useStore } from '../../../core/useCases/store';

export interface FormData {
    totalSeats: number;
    ticketTimeStep: number;
    serviceStartTime: string;
    serviceEndTime: string;
    notificationDelay: number;
}

export const useConfiguration = () => {
    const { restaurant, updateRestaurant } = useStore();
    const [formData, setFormData] = useState<FormData>({
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

    const handleInputChange = (field: keyof FormData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return {
        formData,
        handleSubmit,
        handleInputChange,
        restaurant
    };
};