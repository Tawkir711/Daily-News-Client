import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"


function MainLayout() {

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
    </div>
  )
}

export default MainLayout
