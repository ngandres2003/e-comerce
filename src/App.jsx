import { BrowserRouter as Router } from "react-router-dom"
import FeaturedVinyls from "./components/FeaturedVinyls"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <FeaturedVinyls />
          <ProductGrid />
        </main>
        <SiteFooter />
      </div>
    </Router>
  )
}

export default App

