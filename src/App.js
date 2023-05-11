import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Principles from './pages/Principles'
import PassportPopup from './pages/Popup'
import SwitchNetworkModal from './components/SwitchNetwork'
import { SwitchNetworkProvider } from './contexts/SwitchNetwork'
import { LoadingProvider } from './hooks/useLoading'
import { ErrorProvider } from './hooks/useError'


const App = () => {
  return (
    <SwitchNetworkProvider>
      <LoadingProvider>
        <ErrorProvider>
          <div>
            <SwitchNetworkModal />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/principles' element={<Principles />} />
              <Route path='/popup' element={<PassportPopup />} />
            </Routes>
          </div>
        </ErrorProvider>
      </LoadingProvider>
    </SwitchNetworkProvider>
  )
}

export default App
