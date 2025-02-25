import { useEffect } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { LevelSelect } from '../../components/features/level-select';
import './Dashboard.scss';

const DashboardPage = () => {
  useEffect(() => {
    const element = document.getElementById('dashboard-content');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <div className="dashboard-page">
      <Header />
      <main id="dashboard-content" className="dashboard-content">
        <LevelSelect />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;