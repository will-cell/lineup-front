import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000; // 3 secondes
        const increment = 100; // Incrément tous les 100ms
        const step = 100 / (duration / increment);
        
        const timer = setInterval(() => {
            setProgress(prev => {
                const next = Math.min(prev + step, 100);
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 200); // Petit délai pour la transition
                }
                return next;
            });
        }, increment);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-indigo-600 mb-8">LineUp</h1>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-indigo-600 transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Chargement...
            </div>
        </div>
    );
};