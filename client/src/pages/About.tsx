import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { COMPANY_INFO, GUARANTEE } from "@/const";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Highland Moving
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted moving partner in Jonesborough and Bristol, Tennessee
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Moving companies can be a dime a dozen. How do you pick the correct company? We believe it comes down to trust.
              </p>
              <p className="text-gray-600 mb-4">
                Our Highland Guarantee ensures that after every job, our customers will not just feel satisfied, but they will feel valued as well. Highland Moving is a fully licensed and insured moving company. Your items are protected both while loading/unloading and during transport.
              </p>
              <p className="text-gray-600">
                Call us today for a custom moving plan that will not only save you money but save you stress!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency in every interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Service</h3>
                <p className="text-gray-600">
                  We go above and beyond to serve our customers with excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  We invest 10% of profits back into local ministries and non-profits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every move, big or small.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highland Guarantee */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Highland Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highland Moving prioritizes making integrity, service, and transparency a core element in every part of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.values(GUARANTEE).map((item, index) => (
              <Card key={index} className="border-2">
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

      {/* Faith-Based Mission */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're Not Your Average Moving Company
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Building a business is not just about making money. It's about investing in the community we call home. 10% of all profits go back into furthering God's Kingdom by supporting local ministries and non-profits.
            </p>
            <p className="text-lg opacity-90">
              Our team come from very different backgrounds. But the biggest thing that brings them together is their faith in Jesus. Jesus has set us free and His goodness overwhelms us. Praise be to Him.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Highland Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us show you what sets us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                Call {COMPANY_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

