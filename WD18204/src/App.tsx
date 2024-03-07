import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './layout/User'
import { HomePage } from './pages/homepage'
import Artircle from './pages/Artircle'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='article' element={<Artircle/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
