import { Header } from '../../components/layout/Header'
import { Box } from '../../components/features/introduction'
// import { Features } from '../../components/features/Features'
import { Footer } from '../../components/layout/Footer'
import './Top.scss'

/**
 * トップページコンポーネント
 * アプリケーションのランディングページとして機能し、
 * イントロダクションとヘッダー/フッターを表示
 */
const TopPage = () => {
  return (
    <div className="top-page">
      {/* ヘッダーナビゲーション */}
      <Header />
      
      {/* メインのイントロダクションセクション */}
      <Box />
      
      {/* <Features /> */}
      {/* <h1>Hello World</h1> */}
      
      {/* フッター情報 */}
      <Footer />
    </div>
  )
}

export default TopPage