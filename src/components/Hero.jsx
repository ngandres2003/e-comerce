import { ArrowRight } from "lucide-react"

import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Descubre el Vinilo de tus Artistas Favoritos
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explora nuestra colección exclusiva de vinilos de los mejores artistas de Spotify. Música auténtica en
                formato físico.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#products">
                  Explorar Colección <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Artistas Destacados
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-full">
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 rotate-[-10deg] transform">
                <div className="h-[350px] w-[350px] overflow-hidden rounded-md shadow-xl">
                  <img src="data:image/jpeg;base64,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" alt="Vinyl record" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 rotate-[10deg] transform">
                <div className="h-[350px] w-[350px] overflow-hidden rounded-md shadow-xl">
                  <img src="data:image/jpeg;base64,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" alt="Vinyl record" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

