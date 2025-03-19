import { ShoppingCart } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import products from "../data-source"

export default function ArtistGrid() {

  const artists = { __proto__: null,
    ...products.reduce((object, product) => { object[product.artist] = []; return object; },
                       {__proto__: null})
  }
  for (let product of products) {
    artists[product.artist].push(product)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="products">
      <div className="container px-4 md:px-6 space-y-12 lg:space-y-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Artistas de la Colección</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora nuestra amplia selección de vinilos de artistas de Spotify
            </p>
          </div>
        </div>
        {Object.entries(artists).map(([artist, products]) => (
          <div key={artist} className="space-y-2">
            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">{artist}</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} by ${product.artist}`}
                      className="h-[200px] w-full object-cover"
                    />
                  </CardContent>
                  <CardHeader className="p-4">
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div>
                      <p className="font-bold">${product.price}</p>
                      <p className="text-xs text-muted-foreground">{product.genre}</p>
                    </div>
                    <Button size="sm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Añadir
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

