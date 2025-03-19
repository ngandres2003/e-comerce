import { BrowserRouter as Router } from "react-router-dom"
import ArtistGrid from "./components/ArtistGrid"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"

function Artists() {
  return (
    <main className="flex-1">
      <ArtistGrid />
    </main>
  )
}

export default Artists
