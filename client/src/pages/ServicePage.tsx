import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Star } from "lucide-react";
import { SERVICES, COMPANY_INFO, TESTIMONIALS } from "@/const";
import NotFound from "./NotFound";

// Service-specific content
const serviceContent: Record<string, any> = {
  "local-moving-jonesborough-bristol-tn": {
    h1: "Local Moving Services Between Jonesborough & Bristol, TN",
    description: "Professional local moving services you can trust. Highland Moving provides reliable, affordable local moves throughout the Tri-Cities area.",
    benefits: [
      "Experienced local movers who know the area",
      "Hourly billing with no hidden fees",
      "Fully licensed and insured",
      "Professional packing materials and equipment",
      "Careful handling of your belongings",
    ],
    howItWorks: [
      { title: "Request Quote", description: "Call us or fill out our online form for a free estimate" },
      { title: "Schedule Move", description: "Choose a date and time that works for you" },
      { title: "Relax", description: "Our professional team handles everything" },
    ],
    pricing: "Local moves are billed hourly at $149/hour with a 3-hour minimum (Saturdays $199/hour). Rate includes 2-person crew and truck. Final cost depends on the size of your home and amount of items.",
    faqs: [
      { q: "How much does a local move cost?", a: "Local moves are $149/hour with a 3-hour minimum ($447 minimum). Saturdays are $199/hour. A typical 2-bedroom apartment takes 4-5 hours." },
      { q: "Do you provide packing materials?", a: "Yes, we provide all necessary packing materials and equipment." },
      { q: "What areas do you serve?", a: "We serve Jonesborough, Bristol, Johnson City, and surrounding Tri-Cities areas." },
      { q: "Are you licensed and insured?", a: "Yes, we are fully licensed and insured for your protection." },
    ],
  },
  "long-distance-moving-tennessee": {
    h1: "Long Distance Moving Services Between Jonesborough & Bristol, TN",
    description: "Planning a move out of state? Highland Moving provides reliable long-distance moving services with transparent pricing and professional care.",
    benefits: [
      "Experienced with interstate moves",
      "Transparent pricing, no surprise fees",
      "Full insurance coverage",
      "Professional packing and loading",
      "GPS tracking of your belongings",
    ],
    howItWorks: [
      { title: "Free Estimate", description: "Get a detailed quote based on distance and volume" },
      { title: "Pack & Load", description: "We carefully pack and load your belongings" },
      { title: "Deliver", description: "We deliver to your new home on schedule" },
    ],
    pricing: "Long distance moves are priced based on distance, weight, and additional services. Contact us for a free, detailed quote.",
    faqs: [
      { q: "How is long distance moving priced?", a: "Pricing is based on distance, weight of items, and any additional services like packing." },
      { q: "How long does a long distance move take?", a: "Timing depends on distance. We'll provide an estimated delivery window with your quote." },
      { q: "Is my stuff insured during the move?", a: "Yes, we provide full insurance coverage for long distance moves." },
      { q: "Can I track my belongings?", a: "Yes, we provide GPS tracking so you know where your items are at all times." },
    ],
  },
  "packing-services-jonesborough-tn": {
    h1: "Professional Packing Services Between Jonesborough & Bristol, TN",
    description: "Don't have time to pack? Let our professional team handle it. We'll carefully pack your entire home or just the items you need help with.",
    benefits: [
      "Professional packing materials included",
      "Experienced packers who know how to protect your items",
      "Full packing or partial packing available",
      "Unpacking services at your new home",
      "Saves you time and stress",
    ],
    howItWorks: [
      { title: "Choose Service", description: "Full packing or just fragile items" },
      { title: "We Pack", description: "Our team carefully packs everything" },
      { title: "We Move", description: "Then we move everything to your new home" },
    ],
    pricing: "Packing services are included in our standard moving rate of $149/hour (3-hour minimum, Saturdays $199/hour). All packing materials included.",
    faqs: [
      { q: "Do you provide packing materials?", a: "Yes, all packing materials (boxes, tape, bubble wrap, etc.) are included." },
      { q: "Can you pack just fragile items?", a: "Yes, we offer partial packing for just the items you need help with." },
      { q: "Do you offer unpacking services?", a: "Yes, we can unpack and help you settle into your new home." },
      { q: "How long does packing take?", a: "A typical 3-bedroom home takes 4-6 hours to pack completely." },
    ],
  },
  "piano-moving-bristol-tn": {
    h1: "Professional Piano Moving Between Jonesborough & Bristol, TN",
    description: "Pianos require special care and equipment. Our experienced team uses piano boards and proper techniques to safely move your valuable instrument.",
    benefits: [
      "Specialized piano moving equipment (piano boards)",
      "Experienced with all types of pianos",
      "Proper protection and padding",
      "Careful navigation of stairs and tight spaces",
      "Fully insured for your peace of mind",
    ],
    howItWorks: [
      { title: "Assessment", description: "We assess your piano type and moving requirements" },
      { title: "Preparation", description: "We properly protect and secure your piano" },
      { title: "Safe Transport", description: "We carefully move your piano to its new location" },
    ],
    pricing: "Piano moving starts at $200 in addition to standard moving costs ($149/hour, 3-hour minimum). Saturdays $199/hour. Price varies based on piano type and stairs.",
    faqs: [
      { q: "Do you have special equipment for pianos?", a: "Yes, we use professional piano boards and specialized equipment." },
      { q: "Can you move upright and grand pianos?", a: "Yes, we're experienced with all types of pianos." },
      { q: "What if there are stairs?", a: "We can handle stairs, though it may affect pricing. We'll assess during the estimate." },
      { q: "Is my piano insured during the move?", a: "Yes, your piano is fully covered by our insurance." },
    ],
  },
  "gun-safe-moving-tennessee": {
    h1: "Gun Safe Moving Services Between Jonesborough & Bristol, TN",
    description: "Gun safes are extremely heavy and require professional equipment and expertise. We safely move gun safes of all sizes.",
    benefits: [
      "Specialized equipment for heavy safes",
      "Experienced with safes up to 1000+ lbs",
      "Proper protection of floors and doorways",
      "Safe navigation of stairs if needed",
      "Fully insured",
    ],
    howItWorks: [
      { title: "Measure", description: "We measure your safe and access points" },
      { title: "Prepare", description: "We protect floors and use proper equipment" },
      { title: "Move Safely", description: "We carefully transport your safe" },
    ],
    pricing: "Gun safe moving starts at $150 in addition to standard moving costs ($149/hour, 3-hour minimum). Saturdays $199/hour. Price varies based on weight and stairs.",
    faqs: [
      { q: "How heavy of a safe can you move?", a: "We can move safes up to 1000+ pounds with proper equipment." },
      { q: "Do you move safes up stairs?", a: "Yes, though it may require additional equipment and affect pricing." },
      { q: "Will you damage my floors?", a: "No, we use protective materials to protect your floors and doorways." },
      { q: "Is my safe insured during the move?", a: "Yes, your safe is fully covered by our insurance." },
    ],
  },
  "junk-hauling-jonesborough-tn": {
    h1: "Local Junk Hauling Between Jonesborough & Bristol, TN",
    description: "Need to get rid of unwanted items? We provide local junk hauling and removal services to help you declutter before or after your move.",
    benefits: [
      "Remove unwanted furniture and items",
      "Proper disposal and recycling",
      "Same-day service available",
      "No item too big or small",
      "Eco-friendly disposal practices",
    ],
    howItWorks: [
      { title: "Schedule", description: "Call us to schedule junk removal" },
      { title: "We Load", description: "Our team loads everything into our truck" },
      { title: "We Dispose", description: "We properly dispose or recycle your items" },
    ],
    pricing: "Junk hauling is $149/hour with a 3-hour minimum (Saturdays $199/hour). Final price depends on volume and disposal fees.",
    faqs: [
      { q: "What items can you haul away?", a: "We can haul furniture, appliances, yard waste, and most household items." },
      { q: "Do you recycle?", a: "Yes, we recycle and donate items when possible." },
      { q: "Can you do same-day service?", a: "Yes, same-day service is often available. Call us to check availability." },
      { q: "How is junk hauling priced?", a: "Junk hauling is $149/hour with a 3-hour minimum ($447 minimum). Saturdays are $199/hour. We'll provide a quote before starting." },
    ],
  },
  "furniture-delivery-bristol-tn": {
    h1: "Furniture Delivery & Assembly Between Jonesborough & Bristol, TN",
    description: "Bought new furniture? We'll deliver and assemble it for you. Professional furniture delivery and assembly services.",
    benefits: [
      "Professional furniture assembly",
      "Careful delivery and placement",
      "Removal of packaging materials",
      "Experience with all major brands",
      "Fully insured",
    ],
    howItWorks: [
      { title: "Schedule", description: "Schedule delivery at your convenience" },
      { title: "Deliver", description: "We carefully deliver your furniture" },
      { title: "Assemble", description: "We professionally assemble and place it" },
    ],
    pricing: "Furniture delivery and assembly is $149/hour with a 3-hour minimum (Saturdays $199/hour). Final price varies by item complexity. Contact us for a quote.",
    faqs: [
      { q: "Do you assemble all types of furniture?", a: "Yes, we're experienced with all major furniture brands and types." },
      { q: "Will you remove packaging?", a: "Yes, we'll remove and dispose of all packaging materials." },
      { q: "Can you move furniture between rooms?", a: "Yes, we can rearrange furniture within your home." },
      { q: "Are you insured?", a: "Yes, we're fully licensed and insured." },
    ],
  },
  "appliance-delivery-jonesborough-tn": {
    h1: "Large Appliance Delivery & Assembly Between Jonesborough & Bristol, TN",
    description: "Professional delivery and installation of large appliances. We handle refrigerators, washers, dryers, and more.",
    benefits: [
      "Experienced with all major appliances",
      "Proper installation and setup",
      "Removal of old appliances available",
      "Protection of floors and doorways",
      "Fully insured",
    ],
    howItWorks: [
      { title: "Schedule", description: "Schedule delivery and installation" },
      { title: "Deliver", description: "We carefully deliver your appliance" },
      { title: "Install", description: "We professionally install and test it" },
    ],
    pricing: "Appliance delivery and installation is $149/hour with a 3-hour minimum (Saturdays $199/hour). Contact us for a detailed quote.",
    faqs: [
      { q: "Do you install appliances?", a: "Yes, we can install and connect most appliances." },
      { q: "Can you remove my old appliance?", a: "Yes, we offer old appliance removal and disposal." },
      { q: "What appliances do you deliver?", a: "We deliver refrigerators, washers, dryers, stoves, and more." },
      { q: "Are you insured?", a: "Yes, we're fully licensed and insured." },
    ],
  },
  "tv-mounting-bristol-tn": {
    h1: "Professional TV Mounting Between Jonesborough & Bristol, TN",
    description: "Professional TV mounting and installation services. We'll mount your TV safely and hide the cables for a clean look.",
    benefits: [
      "Professional mounting on any wall type",
      "Cable management and hiding",
      "Proper height and viewing angle",
      "Experience with all TV sizes",
      "Fully insured",
    ],
    howItWorks: [
      { title: "Schedule", description: "Schedule your TV mounting" },
      { title: "Mount", description: "We professionally mount your TV" },
      { title: "Finish", description: "We hide cables and test everything" },
    ],
    pricing: "TV mounting starts at $150 (includes labor and basic hardware). Additional charges may apply for complex installations or in-wall cable concealment.",
    faqs: [
      { q: "What size TVs can you mount?", a: "We can mount TVs of all sizes, from small to 85+ inches." },
      { q: "Do you hide the cables?", a: "Yes, we provide cable management for a clean look." },
      { q: "Can you mount on any wall type?", a: "Yes, including drywall, brick, concrete, and more." },
      { q: "Do you provide the mount?", a: "We can use your mount or provide one for an additional fee." },
    ],
  },
};

export default function ServicePage() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug || "";

  // Find the service
  const service = SERVICES.find((s) => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.h1}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {COMPANY_INFO.phone}
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Highland Moving?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.howItWorks.map((step: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6">{content.pricing}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    <Link href="/cost-calculator">Calculate Cost</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Get Exact Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.slice(0, 2).map((testimonial, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free, no-obligation quote for your {service.name.toLowerCase()}.
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
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>Call {COMPANY_INFO.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

