import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Highland Moving</h3>
            <p className="text-gray-400 mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Licensed & Insured Moving Company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cost-calculator" className="text-gray-400 hover:text-white transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/moving-guide" className="text-gray-400 hover:text-white transition-colors">
                  Moving Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-secondary" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-secondary" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-gray-400">
                  {COMPANY_INFO.address}
                  <br />
                  Serving: {COMPANY_INFO.serviceArea}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Highland Moving. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Building a business is not just about making money. It's about investing in the community we call home.
          </p>
        </div>
      </div>
    </footer>
  );
}

