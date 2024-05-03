import Header from "./assets/components/Header/Header.jsx"
import Footer from "./assets/components/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom'

function Layout() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout