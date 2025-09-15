import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, TrendingUp, Globe, DollarSign, Users, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "Business Plan Writing",
    description:
      "Comprehensive business plans tailored for your industry and goals. Perfect for startups, expansions, and strategic planning.",
    features: ["Market Analysis", "Competitive Research", "Executive Summary", "Implementation Timeline"],
    price: "Starting at $497",
  },
  {
    icon: TrendingUp,
    title: "Financial Modeling",
    description:
      "Detailed financial projections and modeling to demonstrate your business viability and growth potential.",
    features: ["5-Year Projections", "Cash Flow Analysis", "Break-even Analysis", "Scenario Planning"],
    price: "Starting at $397",
  },
  {
    icon: Globe,
    title: "Investor Visa Support",
    description:
      "Specialized documentation for E-2, EB-5, and other investor visa applications with immigration expertise.",
    features: ["USCIS Compliance", "Investment Analysis", "Job Creation Plans", "Legal Documentation"],
    price: "Starting at $897",
  },
  {
    icon: DollarSign,
    title: "Loan Applications",
    description: "SBA loan packages and bank financing applications with proven success rates.",
    features: ["SBA Loan Packages", "Bank Presentations", "Credit Analysis", "Collateral Assessment"],
    price: "Starting at $597",
  },
  {
    icon: Users,
    title: "Pitch Deck Creation",
    description: "Investor-ready pitch decks that tell your story and secure funding.",
    features: ["Investor Presentations", "Visual Design", "Story Development", "Q&A Preparation"],
    price: "Starting at $697",
  },
  {
    icon: Shield,
    title: "Due Diligence Support",
    description: "Comprehensive due diligence packages for acquisitions and investments.",
    features: ["Financial Audit", "Risk Assessment", "Valuation Analysis", "Compliance Review"],
    price: "Starting at $797",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our <span className="text-primary">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Comprehensive business consulting services designed to help you succeed at every stage of your
            entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Link href="/get-started">
                      <Button size="sm">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
