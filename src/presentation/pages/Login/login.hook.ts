import { useState } from 'react';
import { useAuthStore } from '../../../core/useCases/authStore';

export const useLogin = () => {
    const { login, isAuthenticated, isLoading, error } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ email, password });
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        isAuthenticated,
        isLoading,
        error,
        showContent,
        setShowContent
    };
};