import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HomeSignUp() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
        <div className="absolute inset-0 grid grid-cols-6 gap-px">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-l border-white/20 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-px">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-t border-white/20 w-full"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 tracking-tight">
            Join the Meat Sharing Community Today
          </h2>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Sign up now to enjoy exclusive deals and also meet other meat sharing enthusiasts
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="group font-medium text-base px-8 py-6 rounded-full hover:scale-105 transition-all duration-300"
          >
            <Link to="/SignUp" className="flex items-center gap-2">
              Sign Up
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
    </div>
  )
}

