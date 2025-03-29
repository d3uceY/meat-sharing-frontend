import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Products() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Meats</h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      {/* Cow Meat Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Cow Meat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cow Meat Card 1 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/cowmeat1.PNG"
                alt="Cow meat 20 way share"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Cow Meat 20 way share</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  20 Share
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The cow is shared equally amongst 20 people</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(60000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>

          {/* Cow Meat Card 2 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/cowmeat2.PNG"
                alt="Cow meat 10 way share"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Cow Meat 10 way share</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  10 Share
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The cow is shared equally amongst 10 people</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(110000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>

          {/* Cow Meat Card 3 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/cowmeat3.PNG"
                alt="Cow meat 5 way share"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Cow Meat 5 way share</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  5 Share
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The cow is shared equally amongst 5 people</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(238000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Goat Meat Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Goat Meat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Goat Meat Card 1 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/goatmeat2.PNG"
                alt="Goat meat 2 way share"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Goat Meat 2 way share</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  2 Share
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The goat is shared equally amongst 2 people</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(39000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>

          {/* Goat Meat Card 2 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/goatmeat3.PNG"
                alt="Goat meat 4 way share"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Goat Meat 4 way share</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  4 Share
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The goat is shared equally amongst 4 people</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(20000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>

          {/* Goat Meat Card 3 */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="src/assets/goatmeat1.PNG"
                alt="One Full Goat"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">One Full Goat</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Full
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You get one Full Goat</p>
              <p className="text-2xl font-bold text-primary">{formatPrice(77000)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

