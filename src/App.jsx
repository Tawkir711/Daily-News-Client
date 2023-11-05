import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"


function MainLayout() {

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
      <Footer ></Footer>
    </div>
  )
}

export default MainLayout
