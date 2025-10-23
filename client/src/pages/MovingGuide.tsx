import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/const";

export default function MovingGuide() {
  const timeline = [
    {
      title: "8 Weeks Before Moving",
      tasks: [
        "Create a moving binder to organize receipts, contracts, and checklists",
        "Research and compare moving companies",
        "Start decluttering and donate unwanted items",
        "Begin using up pantry items and freezer food",
        "Take measurements of new home and plan furniture placement",
      ],
    },
    {
      title: "6 Weeks Before Moving",
      tasks: [
        "Get quotes from at least 3 moving companies",
        "Book your moving date with Highland Moving",
        "Order packing supplies (boxes, tape, bubble wrap)",
        "Notify your landlord if renting",
        "Start packing items you rarely use",
      ],
    },
    {
      title: "4 Weeks Before Moving",
      tasks: [
        "Notify utilities to schedule disconnect/connect dates",
        "Change your address with USPS",
        "Update address with banks, insurance, subscriptions",
        "Arrange for school records transfer if you have children",
        "Pack seasonal items and decorations",
      ],
    },
    {
      title: "2 Weeks Before Moving",
      tasks: [
        "Confirm moving details with Highland Moving",
        "Pack most of your belongings, label boxes clearly",
        "Prepare an essentials box for first night",
        "Arrange for pet care on moving day",
        "Clean and defrost refrigerator/freezer",
      ],
    },
    {
      title: "1 Week Before Moving",
      tasks: [
        "Final packing of non-essential items",
        "Confirm utility shut-off and turn-on dates",
        "Pack a suitcase with clothes for moving week",
        "Dispose of hazardous materials properly",
        "Take photos of electronics setup for easy reassembly",
      ],
    },
    {
      title: "Moving Day",
      tasks: [
        "Do final walkthrough of old home",
        "Check all closets, cabinets, and storage areas",
        "Review inventory with movers",
        "Keep important documents and valuables with you",
        "Take meter readings and photos of property condition",
      ],
    },
    {
      title: "After the Move",
      tasks: [
        "Unpack essentials first",
        "Check for any damage and document for insurance",
        "Update your driver's license and vehicle registration",
        "Register to vote in your new area",
        "Explore your new neighborhood and introduce yourself to neighbors",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Moving Preparation Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your step-by-step checklist for a stress-free move
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Checklist
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Prepare for Your Move
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Moving can be overwhelming, but with proper planning and organization, you can make it a smooth and stress-free experience. This comprehensive guide will walk you through every step of the moving process, from 8 weeks before your move to settling into your new home.
            </p>
            <p className="text-lg text-gray-600">
              Follow this timeline to stay organized and ensure nothing gets forgotten. And remember, Highland Moving is here to help every step of the way!
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing Tips */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Packing Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Packing Essentials
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use sturdy boxes in various sizes</li>
                    <li>• Pack heavy items in small boxes</li>
                    <li>• Label all boxes with contents and room</li>
                    <li>• Use color-coded labels for each room</li>
                    <li>• Keep an inventory list</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Fragile Items
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wrap each item individually</li>
                    <li>• Use plenty of packing paper or bubble wrap</li>
                    <li>• Mark boxes as "FRAGILE" clearly</li>
                    <li>• Pack dishes vertically, not flat</li>
                    <li>• Fill empty spaces to prevent shifting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Room-by-Room Strategy
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Start with least-used rooms</li>
                    <li>• Pack one room at a time</li>
                    <li>• Keep similar items together</li>
                    <li>• Don't mix items from different rooms</li>
                    <li>• Save kitchen and bathroom for last</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Essentials Box
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Toiletries and medications</li>
                    <li>• Change of clothes for each person</li>
                    <li>• Phone chargers and electronics</li>
                    <li>• Important documents</li>
                    <li>• Snacks and bottled water</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let Us Handle the Heavy Lifting
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't want to pack yourself? Highland Moving offers professional packing services to make your move even easier.
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

