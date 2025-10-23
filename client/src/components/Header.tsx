import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, APP_LOGO, SERVICES } from "@/const";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={APP_LOGO}
              alt="Highland Moving"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/cost-calculator"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Cost Calculator
            </Link>

            <Link
              href="/moving-guide"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Moving Guide
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {COMPANY_INFO.phone}
            </a>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-gray-50 py-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        onClick={() => {
                          setMobileServicesOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/cost-calculator"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cost Calculator
              </Link>

              <Link
                href="/moving-guide"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Moving Guide
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 py-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="px-4 py-2">
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky mobile call button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center justify-center bg-secondary text-white rounded-full w-14 h-14 shadow-lg hover:bg-secondary/90 transition-all"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}

