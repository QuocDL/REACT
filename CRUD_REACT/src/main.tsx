import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider from './context/ProductContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ProductContextProvider>
)
