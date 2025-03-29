import { forwardRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="bg-slate-950 text-slate-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <img src="/src/assets/Group 4.png" alt="Protein NG Logo" className="h-10 w-auto" />
              <h2 className="text-xl font-bold">Protein NG</h2>
            </div>
            <p className="text-slate-400 max-w-xs">Premium quality meat products delivered to your doorstep.</p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="flex items-start space-x-3 text-slate-400">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p>Block 20 Yusuf Akinde Estate</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:Proteinng@gmail.com" className="hover:text-primary transition-colors">
                  Proteinng@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+2348000000000" className="hover:text-primary transition-colors">
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="./products" className="text-slate-400 hover:text-primary transition-colors">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="./AboutUs" className="text-slate-400 hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="./OurMeats" className="text-slate-400 hover:text-primary transition-colors">
                      Our Meats
                    </a>
                  </li>
                  <li>
                    <a href="./" className="text-slate-400 hover:text-primary transition-colors">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="./products" className="text-slate-400 hover:text-primary transition-colors">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="./" className="text-slate-400 hover:text-primary transition-colors">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="./" className="text-slate-400 hover:text-primary transition-colors">
                      Partnerships
                    </a>
                  </li>
                  <li>
                    <a href="./" className="text-slate-400 hover:text-primary transition-colors">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 my-6" />

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
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
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
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
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
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
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
          <p className="text-slate-400 text-sm">© {currentYear} Protein NG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer

