import { ArrowRight } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import products from "../data-source"

export default function FeaturedVinyls() {
  const featuredVinyls = products.slice(0, 3)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="featured">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vinilos Destacados</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre los vinilos más populares de tus artistas favoritos de Spotify
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {featuredVinyls.map((vinyl) => (
            <Card key={vinyl.id} className="overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={vinyl.image || "/placeholder.svg"}
                    alt={`${vinyl.title} by ${vinyl.artist}`}
                    className="aspect-square w-full object-cover transition-all hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">{vinyl.title}</h3>
                    <p className="text-white/80">{vinyl.artist}</p>
                    <p className="text-white font-bold mt-2">${vinyl.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <a href="#products">
              Ver Todos los Vinilos <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

