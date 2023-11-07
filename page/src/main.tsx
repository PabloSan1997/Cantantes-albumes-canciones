import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './estilos/index.scss'
import { Provedor } from './Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provedor>
      <App />
    </Provedor>
  </React.StrictMode>,
)

console.log(import.meta.env.VITE_ADVERT);