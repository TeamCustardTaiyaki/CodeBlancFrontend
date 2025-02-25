import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopPage from './pages/Top'
import DashboardPage from './pages/Dashboard'
import StartPage from './pages/start'
import QuestionPage from './pages/Question'
import ResultPage from './pages/Result'
import AboutTaiyakiPage from './pages/AboutTaiyaki'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
      {/* ここにコンポーネントを追加していきます */}
      <Route path="/" element={<TopPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/about" element={<AboutTaiyakiPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App