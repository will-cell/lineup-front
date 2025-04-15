import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './presentation/layouts/MainLayout';
import { HomePage } from './presentation/pages/HomePage';
import { ConfigurationPage } from './presentation/pages/ConfigurationPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
