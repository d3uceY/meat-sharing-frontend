import landingImage from "/assets/landingPage.jpg"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[90vh] items-center py-12 md:py-24">
          {/* Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Discover the joy of sharing quality meat with your community today
            </h1>
            <p className="text-xl text-slate-600 mb-8">Join our meat sharing revolution</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-6 text-base font-medium">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-slate-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">5K+</p>
                <p className="text-sm text-slate-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-slate-500">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-slate-500">Local Farms</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src={landingImage || "/placeholder.svg"}
                alt="Premium quality meat"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m12 15 2 2 4-4" />
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Quality Guaranteed</p>
                  <p className="text-xs text-slate-500">Ethically sourced meats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

