import { useState, useEffect } from 'react';
import { useStore } from '../../../core/useCases/store';
import { useAuthenticatedUser } from '../../../core/useCases/hooks/useAuthenticatedUser';

export interface FormData {
    capacity: number;
    averageWaitingTime: number;
    notificationThreshold: number;
}

export const useConfiguration = () => {
    const { updateRestaurant } = useStore();
    const user = useAuthenticatedUser();
    const [formData, setFormData] = useState<FormData>({
        capacity: user.restaurant.capacity,
        averageWaitingTime: user.restaurant.averageWaitingTime,
        notificationThreshold: user.restaurant.notificationThreshold
    });

    useEffect(() => {
        setFormData({
            capacity: user.restaurant.capacity,
            averageWaitingTime: user.restaurant.averageWaitingTime,
            notificationThreshold: user.restaurant.notificationThreshold
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