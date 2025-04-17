import { User, LoginCredentials } from '../../domain/entities';
import axiosInstance from './axiosConfig';

export const authService = {
    login: async (credentials: LoginCredentials): Promise<User> => {
        const response = await axiosInstance.post('/auth/login', credentials);
        return response.data.user;
    },

    logout: async (): Promise<void> => {
        await axiosInstance.post('/auth/logout');
    },

    getCurrentUser: async (): Promise<User> => {
        const response = await axiosInstance.get('/auth/me');
        return response.data;
    },

    checkAuth: async (): Promise<boolean> => {
        try {
            await axiosInstance.get('/auth/me');
            return true;
        } catch {
            return false;
        }
    }
};