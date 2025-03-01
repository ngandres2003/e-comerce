import { ArrowRight } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function FeaturedVinyls() {
  const featuredVinyls = [
    {
      id: 1,
      title: "Future Nostalgia",
      artist: "Dua Lipa",
      image: "https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4",
      price: 29.99,
    },
    {
      id: 2,
      title: "After Hours",
      artist: "The Weeknd",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
      price: 34.99,
    },
    {
      id: 3,
      title: "Fine Line",
      artist: "Harry Styles",
      image: "data:image/jpeg;base64,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",
      price: 32.99,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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

