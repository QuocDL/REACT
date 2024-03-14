import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './layout/User'
import { HomePage } from './pages/homepage'
import Artircle from './pages/Artircle'
import AdminLayout from './layout/AdminLayout'
import AdminProductList from './components/AdminProductList'
import AdminForm from './components/AdminForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='article' element={<Artircle/>}/>
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
            <Route path='' element={<AdminProductList/>}/>
            <Route path=':id' element={<AdminForm/>}/>
            <Route path='add' element={<AdminForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
