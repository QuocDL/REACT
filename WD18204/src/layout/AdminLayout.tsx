
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <main className='w-[100%]'>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout
