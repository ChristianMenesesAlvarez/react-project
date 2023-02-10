import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './components/Grid'
import Calc from './components/Calc'
import { App } from './RoutesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Grid columns={7} rows={6} token1={'X'} token2={'O'} repeatTimes={4} /> */}
    {/* <Calc /> */}
    <App />
  </React.StrictMode>,
)
