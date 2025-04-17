import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './presentation/layouts/MainLayout';
import { Home } from './presentation/pages/Home';
import { Configuration } from './presentation/pages/Configurations';
import { Login } from './presentation/pages/Login';
import { PrivateRoute } from './presentation/components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <PrivateRoute>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="configuration" element={<Configuration />} />
              </Routes>
            </MainLayout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
