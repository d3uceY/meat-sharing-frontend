import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beef, Leaf, Users } from "lucide-react"

const InfoSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-(--brand-yellow)/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Discover the Benefits of Meat Sharing</h2>
          <p className="text-lg text-slate-600">
            Our platform connects meat lovers with high-quality, ethically sourced meats. Experience the joy of sharing
            and enjoying premium cuts from local producers.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="border-(--brand-light-red)/10 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-(--brand-red) transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-(--brand-light-red)/20 flex items-center justify-center mb-4">
                <Beef className="h-6 w-6 text-(--brand-red)" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">Quality Meat for the Discerning Palate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">We prioritize quality, ensuring every bite is exceptional.</p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-(--brand-light-red)/10 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-(--brand-red) transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-(--brand-light-red)/20 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-(--brand-red)" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">
                Sustainable Sourcing for Greener Future
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Our meats are sourced from sustainable farms committed to ethical practices.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border-(--brand-light-red)/10 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-(--brand-red) transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-(--brand-light-red)/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-(--brand-red)" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">
                Community Focused - Join Our Meat Lovers Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Become a part of a community that values quality meat.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
})

InfoSection.displayName = "InfoSection"

export default InfoSection

