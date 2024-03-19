import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import ProductContextProvider from './context/ProductContextProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductContextProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </React.StrictMode>,
  </ProductContextProvider>
)
