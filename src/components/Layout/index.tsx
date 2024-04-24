import Footer from '../Footer/index'
import Header from '../Header/index'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
