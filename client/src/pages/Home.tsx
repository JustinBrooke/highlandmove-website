import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Truck,
  Package,
  Map,
  Music,
  Shield,
  Trash2,
  Sofa,
  Tv,
  CheckCircle,
  Star,
} from "lucide-react";
import { COMPANY_INFO, SERVICES, TESTIMONIALS, GUARANTEE } from "@/const";

const iconMap: Record<string, any> = {
  truck: Truck,
  package: Package,
  box: Package,
  map: Map,
  music: Music,
  shield: Shield,
  trash: Trash2,
  sofa: Sofa,
  refrigerator: Package,
  tv: Tv,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Trusted Local Movers Operating Between{" "}
                <span className="text-primary">Jonesborough & Bristol, TN</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {COMPANY_INFO.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  <a href={`tel:${COMPANY_INFO.phone}`}>Call {COMPANY_INFO.phone}</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">No Hidden Fees</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium">5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="/johnson_city_hero.webp"
                alt="Johnson City, Tennessee"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highland Guarantee Section */}
      <section id="guarantee" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Highland Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highland Moving prioritizes making integrity, service, and transparency a core element in every part of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(GUARANTEE).map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer everything from loading and unloading to set-up and post-move cleaning
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Truck;
              return (
                <Link key={service.id} href={`/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Are Highland Moving Company
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Moving companies can be a dime a dozen. How do you pick the correct company?
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe it comes down to trust.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our Highland Guarantee ensures that after every job, our customers will not just feel satisfied, but they will feel valued as well.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Highland Moving is also a fully licensed and insured moving company. Your items are protected both while loading/unloading and during transport.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  Call us today: {COMPANY_INFO.phone}
                </a>
              </Button>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We're Not Your Average Moving Company
              </h3>
              <p className="text-gray-600 mb-4">
                Building a business is not just about making money. It's about investing in the community we call home. 10% of all profits go back into furthering God's Kingdom by supporting local ministries and non-profits.
              </p>
              <p className="text-gray-600">
                Our team come from very different backgrounds. But the biggest thing that brings them together is their faith in Jesus. Jesus has set us free and His goodness overwhelms us. Praise be to Him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Move Stress-Free?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your free, no-obligation quote today and experience the Highland Moving difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link href="/cost-calculator">Calculate Moving Cost</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

