import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { LevelSelect } from '../../components/features/level-select'
import './Dashboard.scss'

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-content">
        {/* ここに後でダッシュボードのコンテンツを追加します */}
        <LevelSelect />
      </main>
      <Footer />
    </div>
  )
}

export default DashboardPage 