import { useAuthStore } from '../authStore';
import { User } from '../../domain/entities';

export const useAuthenticatedUser = (): User => {
    const { user } = useAuthStore();
    
    if (!user) {
        throw new Error('useAuthenticatedUser doit être utilisé dans un contexte authentifié');
    }

    return user;
};