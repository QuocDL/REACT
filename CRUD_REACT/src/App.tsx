
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './layout/UserLayout.tsx'
import ProductList from './components/ProductList.tsx'
import ProductDetail from './components/ProductDetail.tsx'

function App() {



  return (
    <>
      <Routes>
        <Route path='' element={<UserLayout/>}>
            <Route path='products' element={<ProductList/>}/>
            <Route path='products/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
