import { create } from 'zustand';
import { User, LoginCredentials } from '../domain/entities';
import { authService } from '../infrastructure/api/authService';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
            const user = await authService.login(credentials);
            set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ 
                error: error instanceof Error ? error.message : 'Une erreur est survenue',
                isLoading: false 
            });
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await authService.logout();
            set({ user: null, isAuthenticated: false, isLoading: false });
            window.location.href = '/login';
        } catch (error) {
            set({ 
                error: error instanceof Error ? error.message : 'Une erreur est survenue',
                isLoading: false 
            });
        }
    },

    checkAuth: async () => {
        set({ isLoading: true, error: null });
        try {
            const isAuthenticated = await authService.checkAuth();
            if (isAuthenticated) {
                const user = await authService.getCurrentUser();
                set({ user, isAuthenticated: true, isLoading: false });
            } else {
                set({ user: null, isAuthenticated: false, isLoading: false });
            }
        } catch (error) {
            set({ 
                user: null,
                isAuthenticated: false,
                isLoading: false 
            });
        }
    },
}));