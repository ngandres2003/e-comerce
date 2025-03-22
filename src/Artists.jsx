import ArtistGrid from "./components/ArtistGrid"
import { useScrollOnNavigation } from "./lib/utils"

function Artists() {
  useScrollOnNavigation()

  return (
    <main className="flex-1">
      <ArtistGrid />
    </main>
  )
}

export default Artists
