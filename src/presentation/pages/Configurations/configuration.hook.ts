import { useState, useEffect } from 'react';
import { useStore } from '../../../core/useCases/store';
import { useAuthenticatedUser } from '../../../core/useCases/hooks/useAuthenticatedUser';

export interface FormData {
    totalSeats: number;
    ticketTimeStep: number;
    serviceStartTime: string;
    serviceEndTime: string;
    notificationDelay: number;
}

export const useConfiguration = () => {
    const { updateRestaurant } = useStore();
    const user = useAuthenticatedUser();
    const [formData, setFormData] = useState<FormData>({
        totalSeats: user.restaurant.totalSeats,
        ticketTimeStep: user.restaurant.ticketTimeStep,
        serviceStartTime: user.restaurant.serviceStartTime,
        serviceEndTime: user.restaurant.serviceEndTime,
        notificationDelay: user.restaurant.notification_threshold
    });

    useEffect(() => {
        setFormData({
            totalSeats: user.restaurant.totalSeats,
            ticketTimeStep: user.restaurant.ticketTimeStep,
            serviceStartTime: user.restaurant.serviceStartTime,
            serviceEndTime: user.restaurant.serviceEndTime,
            notificationDelay: user.restaurant.notification_threshold
        });
    }, [user.restaurant]);

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
        restaurant: user.restaurant
    };
};