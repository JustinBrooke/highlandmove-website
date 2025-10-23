import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/const";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Moving Quote
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below or call us directly at{" "}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-primary font-semibold hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Local Move Quote, Piano Moving, etc."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Where are you located and where are you moving? What is the size of your new home? What kind of service are you looking for?"
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="text-primary hover:underline"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-primary hover:underline"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">{COMPANY_INFO.address}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Serving: {COMPANY_INFO.serviceArea}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600">Monday - Saturday</p>
                        <p className="text-gray-600">7:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 mt-1">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-4 opacity-90">
                    Call us now for urgent moving needs or questions.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      Call {COMPANY_INFO.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Highland Moving?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Successful Moves</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-600">Licensed & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

