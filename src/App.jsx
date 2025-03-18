import { Outlet } from "react-router-dom"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default App

