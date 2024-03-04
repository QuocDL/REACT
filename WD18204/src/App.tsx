import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HomePage } from './pages/homepage'
function App() {
  return (
    <>
       <Header/>
        <main>
          <HomePage/>
        </main>
       <Footer/>
    </>
  )
}

export default App
