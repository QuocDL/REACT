import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer'

const User = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default User
