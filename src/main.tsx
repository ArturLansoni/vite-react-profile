import React from 'react'
import ReactDOM from 'react-dom/client'
import { Profile } from './pages/Profile'
import { GlobalStyles } from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Profile />
  </React.StrictMode>,
)
