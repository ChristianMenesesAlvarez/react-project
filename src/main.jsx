import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './components/Grid'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Grid columns={7} rows={6} />
  </React.StrictMode>,
)