import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './presentation/layouts/MainLayout';
import { HomePage } from './presentation/pages/HomePage';
import { ConfigurationPage } from './presentation/pages/ConfigurationPage';
import { LoginPage } from './presentation/pages/auth/LoginPage';
import { PrivateRoute } from './presentation/components/PrivateRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <PrivateRoute>
            <MainLayout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="configuration" element={<ConfigurationPage />} />
              </Routes>
            </MainLayout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
