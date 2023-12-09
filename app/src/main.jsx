import React from 'react'
import ReactDOM from 'react-dom/client'

import '/node_modules/minireset.css/'
import './index.scss'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
