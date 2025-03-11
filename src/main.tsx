import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import '@ant-design/v5-patch-for-react-19'
import { startup } from './startup/index.ts'
import { store } from './redux/store.ts'

startup().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/Dash">
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
})