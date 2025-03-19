import Hero from "./components/Hero"
import FeaturedVinyls from "./components/FeaturedVinyls"
import ProductGrid from "./components/ProductGrid"

function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedVinyls />
      <ProductGrid />
    </main>
  )
}

export default Home
