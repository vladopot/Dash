import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import '@ant-design/v5-patch-for-react-19'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Dash">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
