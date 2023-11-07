import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './estilos/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log(import.meta.env.VITE_ADVERT);