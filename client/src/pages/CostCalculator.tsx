import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/const";

export default function CostCalculator() {
  const [moveType, setMoveType] = useState("local");
  const [homeSize, setHomeSize] = useState("2br");
  const [distance, setDistance] = useState("50");
  const [packing, setPacking] = useState(false);
  const [piano, setPiano] = useState(false);
  const [gunSafe, setGunSafe] = useState(false);
  const [stairs, setStairs] = useState(false);
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    let baseRate = 0;
    let hours = 0;

    // Base hours by home size
    const sizeHours: Record<string, number> = {
      studio: 2,
      "1br": 3,
      "2br": 4,
      "3br": 5,
      "4br": 7,
      "5br": 9,
    };

    hours = sizeHours[homeSize] || 4;

    // Hourly rate for local moves
    const hourlyRate = 120;

    if (moveType === "local") {
      baseRate = hours * hourlyRate;
    } else {
      // Long distance: base rate + mileage
      const mileageRate = 2.5;
      baseRate = hours * hourlyRate + parseInt(distance) * mileageRate;
    }

    // Add-ons
    if (packing) baseRate += hours * 40;
    if (piano) baseRate += 200;
    if (gunSafe) baseRate += 150;
    if (stairs) baseRate += 100;

    setEstimate(Math.round(baseRate));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Moving Cost Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Get an instant estimate for your move. For an exact quote, contact us at{" "}
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

      {/* Calculator Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Move Type */}
                  <div>
                    <Label htmlFor="moveType" className="text-lg font-semibold">
                      Move Type
                    </Label>
                    <Select value={moveType} onValueChange={setMoveType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Move</SelectItem>
                        <SelectItem value="long-distance">
                          Long Distance Move
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Home Size */}
                  <div>
                    <Label htmlFor="homeSize" className="text-lg font-semibold">
                      Home Size
                    </Label>
                    <Select value={homeSize} onValueChange={setHomeSize}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1br">1 Bedroom</SelectItem>
                        <SelectItem value="2br">2 Bedrooms</SelectItem>
                        <SelectItem value="3br">3 Bedrooms</SelectItem>
                        <SelectItem value="4br">4 Bedrooms</SelectItem>
                        <SelectItem value="5br">5+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Distance (for long distance moves) */}
                  {moveType === "long-distance" && (
                    <div>
                      <Label htmlFor="distance" className="text-lg font-semibold">
                        Distance (miles)
                      </Label>
                      <Input
                        id="distance"
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        min="1"
                        className="mt-2"
                      />
                    </div>
                  )}

                  {/* Additional Services */}
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">
                      Additional Services
                    </Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="packing"
                          checked={packing}
                          onCheckedChange={(checked) =>
                            setPacking(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="packing"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Packing Services
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="piano"
                          checked={piano}
                          onCheckedChange={(checked) =>
                            setPiano(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="piano"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Piano Moving
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="gunSafe"
                          checked={gunSafe}
                          onCheckedChange={(checked) =>
                            setGunSafe(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="gunSafe"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Gun Safe Moving
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="stairs"
                          checked={stairs}
                          onCheckedChange={(checked) =>
                            setStairs(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="stairs"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Stairs/Multiple Floors
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <Button
                    onClick={calculateEstimate}
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Estimate
                  </Button>

                  {/* Estimate Result */}
                  {estimate !== null && (
                    <div className="mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary">
                      <div className="text-center">
                        <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Estimated Cost
                        </h3>
                        <div className="text-5xl font-bold text-primary mb-4">
                          ${estimate.toLocaleString()}
                        </div>
                        <p className="text-gray-600 mb-6">
                          This is an estimate based on typical moves. For an exact
                          quote tailored to your specific needs, please contact us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button
                            asChild
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90"
                          >
                            <Link href="/contact">Get Exact Quote</Link>
                          </Button>
                          <Button asChild size="lg" variant="outline">
                            <a href={`tel:${COMPANY_INFO.phone}`}>
                              Call {COMPANY_INFO.phone}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pricing Information */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    How We Price
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hourly billing for local moves</li>
                    <li>• Transparent pricing, no hidden fees</li>
                    <li>• You only pay for time needed</li>
                    <li>• Free estimates available</li>
                    <li>• Licensed and insured</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional moving team</li>
                    <li>• Moving truck and equipment</li>
                    <li>• Basic furniture protection</li>
                    <li>• Loading and unloading</li>
                    <li>• Full insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed, personalized quote for your move.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

