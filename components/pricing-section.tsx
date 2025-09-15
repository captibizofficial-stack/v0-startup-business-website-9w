import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Startup Essentials",
    description: "Perfect for new businesses and entrepreneurs",
    price: 497,
    originalPrice: 1500,
    savings: "67% off",
    popular: false,
    features: [
      "Complete Business Plan (15-20 pages)",
      "Market Analysis & Research",
      "Competitive Analysis",
      "Executive Summary",
      "Basic Financial Projections (3 years)",
      "1 Round of Revisions",
      "5-7 Business Day Delivery",
      "Email Support",
    ],
    cta: "Get Started",
    ideal: "Startups, Small Businesses",
  },
  {
    name: "Professional Plus",
    description: "Comprehensive package for serious entrepreneurs",
    price: 897,
    originalPrice: 2800,
    savings: "68% off",
    popular: true,
    features: [
      "Everything in Startup Essentials",
      "Detailed Financial Model (5 years)",
      "Cash Flow Analysis",
      "Break-even Analysis",
      "Investor Pitch Deck (10-12 slides)",
      "SBA Loan Package Preparation",
      "3 Rounds of Revisions",
      "Priority Support",
      "Phone Consultation (1 hour)",
    ],
    cta: "Most Popular",
    ideal: "Growing Businesses, Loan Applications",
  },
  {
    name: "Enterprise Premium",
    description: "Full-service solution for complex projects",
    price: 1497,
    originalPrice: 4500,
    savings: "67% off",
    popular: false,
    features: [
      "Everything in Professional Plus",
      "Investor Visa Documentation (E-2, EB-5)",
      "Due Diligence Package",
      "Advanced Financial Modeling",
      "Multiple Scenario Planning",
      "Custom Market Research",
      "Unlimited Revisions",
      "Dedicated Project Manager",
      "Weekly Progress Calls",
      "Rush Delivery Available",
    ],
    cta: "Premium Service",
    ideal: "Investor Visas, Large Projects",
  },
]

const addOns = [
  { name: "Rush Delivery (2-3 days)", price: 297 },
  { name: "Additional Revision Round", price: 97 },
  { name: "Extra Pitch Deck Design", price: 197 },
  { name: "1-Hour Strategy Call", price: 147 },
  { name: "Market Research Deep Dive", price: 397 },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 bg-card"
                  : "border-border hover:shadow-md transition-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground line-through">${plan.originalPrice}</div>
                      <div className="text-sm font-semibold text-green-600">{plan.savings}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                  <p className="text-xs text-accent font-medium">Ideal for: {plan.ideal}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/get-started" className="block">
                  <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`} size="lg">
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Optional Add-ons</h3>
            <p className="text-muted-foreground">Enhance your package with these additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
              >
                <span className="font-medium">{addon.name}</span>
                <span className="text-primary font-semibold">+${addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're confident in our work. If you're not completely satisfied with your business plan, we'll revise it
            until you are, or provide a full refund within 30 days.
          </p>
        </div>
      </div>
    </section>
  )
}
