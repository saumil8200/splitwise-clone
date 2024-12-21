import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index'

function Layout() {
  return (
    // <>
    // <div className='bg-white'>
    //     <Header/>
    // </div>
    // <div className='w-[95%] md:w-[80%] mx-auto'>
    //     <Outlet />
    // </div>
    // <div className='bg-gray-300'>
    //     <Footer/>
    // </div>
    // </>
    <div className="flex flex-col min-h-screen">
        <div className="bg-white">
            <Header />
        </div>

        <div className="flex-grow w-[80%] md:w-[80%] mx-auto">
            <Outlet />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout