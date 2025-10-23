import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, APP_LOGO } from "@/const";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Cost Calculator", href: "/cost-calculator" },
    { name: "Moving Guide", href: "/moving-guide" },
    { name: "Contact", href: "/contact" },
  ];

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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
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

