import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

interface MainLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Accueil', icon: HomeIcon, path: '/' },
  { name: 'Configuration', icon: Cog6ToothIcon, path: '/configuration' },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex h-16 items-center justify-center bg-indigo-600">
          <h1 className="text-xl font-bold text-white">LineUp</h1>
        </div>
        <nav className="mt-5">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};