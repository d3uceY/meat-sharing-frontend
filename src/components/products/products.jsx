import cowMeat1 from "/assets/cowmeat1.png"
import cowMeat2 from "/assets/cowmeat2.png"
import cowMeat3 from "/assets/cowmeat3.png"
import goatMeat1 from "/assets/goatmeat1.png"
import goatMeat2 from "/assets/goatmeat2.png"
import goatMeat3 from "/assets/goatmeat3.png"

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
    <div className="bg-(--brand-yellow)/30 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-(--brand-red) mb-2">Our Meats</h1>
          <div className="w-24 h-1 bg-(--brand-red) mx-auto"></div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Cow Meat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: cowMeat1, title: "Cow Meat 20 way share", price: 60000, share: "20 Share" },
              { img: cowMeat2, title: "Cow Meat 10 way share", price: 110000, share: "10 Share" },
              { img: cowMeat3, title: "Cow Meat 5 way share", price: 238000, share: "5 Share" },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-(--brand-light-red)/20"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="outline" className="bg-(--brand-light-red)/20 text-(--brand-red) border-(--brand-light-red)">
                      {item.share}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The cow is shared equally amongst {Number.parseInt(item.share)} people
                  </p>
                  <p className="text-2xl font-bold text-(--brand-red)">{formatPrice(item.price)}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-(--brand-red) hover:bg-(--brand-red)/90">Purchase</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Goat Meat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: goatMeat2, title: "Goat Meat 2 way share", price: 39000, share: "2 Share" },
              { img: goatMeat3, title: "Goat Meat 4 way share", price: 20000, share: "4 Share" },
              { img: goatMeat1, title: "One Full Goat", price: 77000, share: "Full" },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-(--brand-light-red)/20"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="outline" className="bg-(--brand-light-red)/20 text-(--brand-red) border-(--brand-light-red)">
                      {item.share}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {item.share === "Full"
                      ? "You get one Full Goat"
                      : `The goat is shared equally amongst ${Number.parseInt(item.share)} people`}
                  </p>
                  <p className="text-2xl font-bold text-(--brand-red)">{formatPrice(item.price)}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-(--brand-red) hover:bg-(--brand-red)/90">Purchase</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

