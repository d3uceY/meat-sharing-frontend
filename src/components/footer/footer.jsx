import { forwardRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import logo from "/assets/Group 4.png"

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="bg-(--brand-yellow)/90 text-slate-800 pt-12 pb-6 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-(--brand-light-red)/10 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-(--brand-red)/10 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="h-10 w-10 rounded-full  flex items-center justify-center text-white font-bold text-lg">
                  <img src={logo} alt="Protein NG" />
                </div>
                <h2 className="text-xl font-bold text-(--brand-red)">Protein NG</h2>
              </div>
              <p className="text-slate-700 max-w-xs">Premium quality meat products delivered to your doorstep.</p>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Location</h3>
              <div className="flex items-start space-x-3 text-slate-700">
                <div className="h-8 w-8 rounded-full bg-(--brand-red)/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-(--brand-red)" />
                </div>
                <p>Block 20 Yusuf Akinde Estate</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="h-8 w-8 rounded-full bg-(--brand-red)/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-(--brand-red)" />
                  </div>
                  <a href="mailto:Proteinng@gmail.com" className="hover:text-(--brand-red) transition-colors">
                    Proteinng@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="h-8 w-8 rounded-full bg-(--brand-red)/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-(--brand-red)" />
                  </div>
                  <a href="tel:+2348000000000" className="hover:text-(--brand-red) transition-colors">
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="./products"
                        className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="./AboutUs"
                        className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="./OurMeats"
                        className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Our Meats
                      </a>
                    </li>
                    <li>
                      <a href="./" className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="./products"
                        className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="./" className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="./" className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Partnerships
                      </a>
                    </li>
                    <li>
                      <a href="./" className="text-slate-700 hover:text-(--brand-red) transition-colors flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-red) mr-2"></span>
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-(--brand-red)/20 my-6" />

          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-(--brand-red) hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-(--brand-red) hover:text-white transition-all"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-(--brand-red) hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <p className="text-slate-600 text-sm">© {currentYear} Protein NG. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer

