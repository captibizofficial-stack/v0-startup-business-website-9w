import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-card to-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Professional <span className="text-primary">Business Plans</span> That Get Results
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert business plan writing, financial modeling, and consulting services for startups, loan
                applications, and investor visas. Trusted by entrepreneurs across the United States.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">90% loan approval success rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">Expert financial modeling & projections</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">Investor visa documentation support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <img
                src="/professional-business-meeting-with-charts-and-grap.jpg"
                alt="Professional business consulting"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Plans Created</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-secondary">$50M+</div>
              <div className="text-sm text-muted-foreground">Funding Secured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
