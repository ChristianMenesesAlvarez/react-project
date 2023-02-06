import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './components/Grid'
import Calc from './components/Calc'
import { App } from './RoutesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Grid columns={7} rows={6} /> */}
    {/* <Calc /> */}
    <App />
  </React.StrictMode>,
)