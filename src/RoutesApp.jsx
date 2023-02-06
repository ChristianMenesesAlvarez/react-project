import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes'
import './pages/translations/translations.js'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export { App }