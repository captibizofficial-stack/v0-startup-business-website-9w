import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Target, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 10 years of experience across multiple industries with proven track record of success.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most projects completed within 5-7 business days without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal project manager assigned to guide you through every step of the process.",
  },
  {
    icon: Target,
    title: "90% Success Rate",
    description: "Our clients achieve a 90% approval rate for loans and investor applications.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "Your business information is protected with enterprise-grade security and NDAs.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "Premium quality services at rates 30-40% below traditional consulting firms.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Why Choose <span className="text-primary">Captibiz</span>?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We combine industry expertise with cutting-edge technology to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
